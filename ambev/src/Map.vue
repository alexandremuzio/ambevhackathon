<template>
  <div class="fill"
    >
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 100%"
    >
        <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="m.onClick"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCA6rvfLP52y1L7j82idIa72XXYHIGHatU',
    // libraries: 'places', //// If you need to use place input 
  }
});

export default {
  name: 'bar-map',
  data () {
    return {
      zoom: 16,
      center: {lat: 0, lng: 0},
    }
  },
  props: ["markers"],
  created: function() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      var barMap = this
      navigator.geolocation.getCurrentPosition(function(position) {
        barMap.center.lat = position.coords.latitude
        barMap.center.lng = position.coords.longitude
        // var newMarker = {
        //   position: {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude
        //   }
        // }
        // barMap.markers.push(newMarker)
      })
    }
  },
  methods: {
    teste: function() {
      console.log(this.markers)
    },
    centerMapFunc: function(marker) {
      console.log(marker)
    }
  }
}
</script>
