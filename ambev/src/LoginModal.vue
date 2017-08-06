<template>
  <div id="login">
    <div class="modal" :class="{'is-active': willShow}">
      <div @click="skip" class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
            <div class="block is-centered">
              <a @click="login" class="button is-info is-large">Entrar com Facebook</a>
            </div>
            <div class="block is-centered">
              <a @click="skip" class="button is-light is-large">Pular</a>
            </div>
          </div>
      </div>
      <button class="modal-close is-large"></button>
    </div>
  </div>
</template>

<script>
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
