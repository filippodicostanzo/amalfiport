<template>
  <div class="layout-form">
    <form>
      <div class="form-group" :class="{error: validation.hasError('form.name')}">
        <div class="content"><input type="text" class="form-control" v-model="form.name"
                                    :placeholder="$t('form.fullname')"/></div>
        <div class="message">{{ validation.firstError('form.name') }}</div>
      </div>
      <div class="form-group" :class="{error: validation.hasError('form.email')}">

        <div class="content"><input type="text" class="form-control" v-model="form.email" placeholder="Email"/></div>
        <div class="message">{{ validation.firstError('form.email') }}</div>
      </div>
      <div class="form-group" :class="{error: validation.hasError('form.subject')}">
        <div class="content"><input type="text" class="form-control" v-model="form.subject"
                                    :placeholder="$t('form.subject')"/></div>
        <div class="message">{{ validation.firstError('form.subject') }}</div>
      </div>

      <div class="form-group" :class="{error: validation.hasError('form.message')}">
        <div class="content"><textarea rows="4" class="form-control" v-model="form.message"
                                       :placeholder="$t('form.message')"/></div>
        <div class="message">{{ validation.firstError('form.message') }}</div>
      </div>

      <div class="form-group text-center" :class="{error: validation.hasError('form.acceptance')}">
        <input type="checkbox" v-model="form.acceptance"/> <span> {{$t('form.check')}}</span>
        <!--<p class="small">
          {{$t('form.privacy')}} {{ $config.siteProperty }} - {{ $config.siteAddress }}
        </p>-->
        <div class="message">{{ validation.firstError('form.acceptance') }}</div>
      </div>

      <div class="form-group">
        <div class="actions text-center">
          <button type="submit" class="btn btn-outline-secondary" @click.prevent="send"> {{$t('form.send')}}</button>
          <!-- <button type="button" class="btn btn-primary" @click="sendWithoutRecaptcha">Submit</button> -->
        </div>
      </div>
    </form>

    <div class="alert-info" v-if="loadingMessage"><p>Attendi...</p></div>

    <div class="alert-success" v-if="sentMessage"><p>Il Messaggio è stato inviato</p></div>
  </div>

</template>

<script>
  import {Validator} from 'simple-vue-validator'

  export default {
    name: "ContactForm",
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
          acceptance: []
        },
        title: 'title.contacts',
        sentMessage: false,
        loadingMessage: false,

      }
    },
    validators: {


      'form.name': function (value) {
        return Validator.value(value).required(this.$i18n.t('form.required'));
      },
      'form.email': function (value) {
        return Validator.value(value).required(this.$i18n.t('form.required')).email(this.$i18n.t('form.email'));
      },
      'form.subject': function (value) {
        return Validator.value(value).required(this.$i18n.t('form.required'));
      },
      'form.message': function (value) {
        return Validator.value(value).required(this.$i18n.t('form.required'));
      },
      'form.acceptance': function (value) {
        return Validator.value(value).required(this.$i18n.t('form.acceptance')).size(1);
      },

    },

    async mounted() {
      try {
        await this.$recaptcha.init()
      } catch (e) {
        console.error(e);
      }

    },


    beforeDestroy() {
      this.$recaptcha.destroy()
    },

    methods: {

      async send() {

        try {
          const token = await this.$recaptcha.execute('login')
          console.log('ReCaptcha token:', token);


          this.$validate().then((success) => {
            if (success) {

              this.loadingMessage = true;
              const qs = require('querystring');


              let data = {
                sender: process.env.CONTACT_FORM_MAIL_SENDER,
                receiver: process.env.CONTACT_FORM_MAIL_RECEIVER,
                namesender: 'Contact Form Agriturismo Sant\'Alfonso',
                name: this.form.name,
                email: this.form.email,
                subject: this.form.subject,
                message: this.form.message
              };


              this.$axios.$post('https://php.localidautore.it/phpmailer/', qs.stringify(data),
                {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                }).then((message) => {
                this.loadingMessage = false;
                this.sentMessage = true;
              }).catch((error) => {
                alert(error);
              });


            }
          })


        } catch (e) {

        }


      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/scss/_variables.scss";

  input, textarea {
    background: transparent;
    color: $white;
    border: 0;
    border-bottom: 1px solid $secondary;
    border-radius: 0;

    &:focus {
      background: transparent;
      border: 0;
      color: $white;
      border-bottom: 1px solid $primary;
      border-radius: 0;
      outline: none;
      box-shadow: none;
    }
  }



  .message {
    text-align: center;
    font-size: 12px;
    color: $primary;
    margin-top: 5px;
    font-weight: bold;
  }

  span {
    color: $secondary;
  }

</style>
