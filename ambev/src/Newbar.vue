<template>
  <div id="app">
    Nome do estabelecimento:<br>
    <input type="text" v-model="name" name="firstname"><br>
    Endereço:<br>
    <vue-google-autocomplete
    id="map"
    classname="form-control"
    placeholder="Digite seu endereço"
    v-on:placechanged="getAddressData"
    >
    </vue-google-autocomplete></br>
    <button v-on:click="saveBar">Cadastrar</button>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import BarDAO from './bar.js'

export default {
  name: 'app',
  components: { VueGoogleAutocomplete },
  data () {
    return {
      name: '',
      address: ''
    }
  },
  methods: {
    saveBar: function () {
      BarDAO.save(this.name, this.address)
      .then((snap) => {
        this.$router.push({ path: '/bar/' + snap.key });
      });
    },
    getAddressData: function (addressData, placeResultData) {
      this.address = addressData;
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
