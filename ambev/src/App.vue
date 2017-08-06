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
                <a class="button is-primary" v-on:click="routeTo('/novobar')">
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
    <div> {{selectedBarId === null ? "no bar selected": "a bar selected"}} </div>
     <div class="modal" :class="{ 'is-active': selectedBarId != null }">
      <div class="modal-background" @click="deselectBar"></div>
        <div class="modal-card">
          <section class="modal-card-body">
            <div class="modal-content">
              <div class="container">
                <bar-card
                  bar="selectedBar"
                ></bar-card>
              </div>
            </div>
          </section>
        </div>
      <button class="modal-close is-large" @click="deselectBar"></button>
    </div> 
    <bar-map
      :markers = "markers"
    >
    </bar-map>
  </div>
</template>

<script>
//import router from 'vue-router';
  import bar from './bar'
  import BarMap from './Map.vue'
  import _ from 'lodash'
  import BarCard from './Bar.vue'

  export default {
    name: 'app',
    data () {
      return {
        searchQuery: "",
        selectedBarId: null,
      }
    },
    computed: {
      selectedBar: function() {
        if (this.selectedBarId === null) {
          return
        }
        
        return this.filteredBars[this.selectedBarId]
      },
      filteredBars: function() {
        var x = bar.getAll(this.searchQuery);
        console.log(bar.getAll())
        console.log(this.searchQuery)
        return x
      },
      markers: function() {
        var self = this
        return _.map(this.filteredBars, function(bar, index) {
          return {
            position: {
              lat: bar.address.latitude,
              lng: bar.address.longitude
            },
            name: bar.name,
            index: index,
            onClick: function() {
              self.selectedBarId = index
              console.log(index)
            }
          }
        })
      }
    },
    methods: {
      deselectBar: function(barId) {
        this.selectedBarId = null
        console.log(barId)
      }
    },
    components: {
      BarMap,
      BarCard,
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
