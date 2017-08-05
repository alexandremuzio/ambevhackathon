<template>
  <div id="app">
    <div class="container">
      <div class="notification">
        <div class="field">
          <div class="control">
            <input class="input is-primary" v-model="searchQuery" placeholder="Search"> 
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <a class="button is-primary">
            Submit
          </a>
        </p>
      </div>
    </div>
    <div v-for="bar in filteredBars">
      {{bar}}
    </div>
  </div>
</template>

<script>
//import router from 'vue-router';
  //import bar from 'bar.js'
  var bar = {
    getByQuery: () => [1, 2, 3, 4, 5, 6]
  }
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
      return bar.getByQuery(this.searchQuery);
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
