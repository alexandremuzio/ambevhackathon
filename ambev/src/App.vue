<template>
  <div id="app" class="fill">
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="./assets/logo.png" alt="uBar: Guia inteligente de vida bohemia" class="image is-96x96" width="75" height="200">
        </a>

        <div class="navbar-item">
          <div class="field">
            <div class="control">
              <input class="input is-primary" v-model="searchQuery" placeholder="Search"> 
            </div>
          </div>
        </div>
        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
        </div>
      </div>

      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
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
    <login-modal :visible="true">
    </login-modal>
    <div class="fill"
      v-if="selectedBarId !== null">
      <span @click="deselectBar" class="icon">
        <i style="margin-left: 40px; margin-top:50px;" class="fa fa-arrow-left is-large"></i>
      </span>
      <bar-card
        :bar="selectedBar"
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
import LoginModal from './LoginModal.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: null,
      selectedBarId: null,
    }
  },
  mounted: function() {
    bar.addLoadCallback(() => {
      this.searchQuery = ""
    })
  },
  methods: {
    deselectBar: function(barId) {
      this.selectedBarId = null
      console.log(barId)
    },
    routeTo: function(route) {
      this.$router.push({path: route});
    }
  },
  computed: {
    selectedBar: function() {
      if (this.selectedBarId === null) {
        return
      }

      var bar = _.find(this.filteredBars, (b) => b.id === this.selectedBarId)
      console.log(bar)
      _.assignIn(bar, {
        numReviews: 20,
      });
      return bar
    },
    filteredBars: function() {

      return bar.getByQuery(this.searchQuery);
    },
    markers: function() {
      var self = this
      var marks = _.map(this.filteredBars, function(bar, index) {
        return {
          position: {
            lat: bar.address.latitude,
            lng: bar.address.longitude
          },
          name: bar.name,
          index: bar.id,
          onClick: function() {
            self.selectedBarId = bar.id
          }
        }
      })
      console.log(marks)
      return marks
    }
  },
  methods: {
    deselectBar: function(barId) {
      this.selectedBarId = null
      console.log(barId)
    },
    routeTo: function(route) {
      this.$router.push({path: route})
    }
  },
  components: {
    BarMap,
    BarCard,
    LoginModal,
  }
}
</script>
