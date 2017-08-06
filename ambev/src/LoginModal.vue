<template>
  <div id="login">
    <div class="modal" :class="{'is-active': willShow}">
      <div @click="skip" class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <table class="table is-fullwidth">
            <tbody>
            <tr><td>
            <div class="block is-centered">
              <a @click="login" class="button is-info is-large" style="width:100%">Entrar com Facebook</a>
            </div>
            </td></tr>
            <tr><td>
            <div class="block is-centered">
              <a @click="skip" class="button is-light is-large"  style="width:100%">Pular</a>
            </div>
            </td></tr>
            </tbody>
            </table>
          </div>
      </div>
      <button class="modal-close is-large"></button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase';


export default {
  name: 'login-modal',
  data () {
    return {
      done: false,
    }
  },
  props: ["visible"],
  computed: {
    willShow: function()
    {
      return !this.done && this.visible
    }
  },
  methods: {
    skip: function(){
      this.done = true
    },
    login: function() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      console.log("login");
      
      this.done = true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
r/style>
