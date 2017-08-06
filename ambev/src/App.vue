<template>
  <div id="app" class="fill">
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
    <div class="fill"
      v-if="selectedBarId !== null">
      <button @click="deselectBar"> Back </Button>
      <bar-card
        bar="selectedBar"
        >
      </bar-card>
    </div>
    <div class="fill"
      :hidden="selectedBarId !== null"
      >
      <bar-map :markers = "markers"></bar-map>
    </div>
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
      return bar.getAll(this.searchQuery);
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
          index: bar.id,
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
