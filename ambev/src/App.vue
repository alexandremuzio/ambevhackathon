<template>
  <div id="app">
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>


        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuExample" class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item">
              <div class="field">
                <div class="control">
                  <input class="input is-primary" v-model="searchQuery" placeholder="Search"> 
                </div>
              </div>
            </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <p class="control">
                <a class="button is-primary" href="/novobar">
                  <span>Adicionar seu bar!</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-for="bar in filteredBars">
      {{bar.name}}
    </div>
  </div>
</template>

<script>
//import router from 'vue-router';
  import bar from './bar'
export default {
  name: 'app',
  data () {
    return {
      searchQuery: "",
    }
  },
  computed:
  {
    filteredBars: function()
    {
      return bar.getAll(this.searchQuery);
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
</style>
