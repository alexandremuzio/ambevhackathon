<template>
  <div id="newbar">
    <section class="hero is-fullheight is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <h1 class="title">
                Cadastre seu bar!
              </h1>
              <div class="box">
                <label class="label">Nome do estabelecimento</label>
                <p class="control">
                  <input class="input" v-model="name" type="text" placeholder="Nome do estabelecimento">
                </p>
                <label class="label">Endereço</label>
                <p class="control">
                  <vue-google-autocomplete
                  id="map"
                  classname="form-control input"
                  placeholder="Digite seu endereço"
                  v-on:placechanged="getAddressData"
                  >
                  </vue-google-autocomplete>
                </p>
                <br>
                <p class="control">
                  <button @click="saveBar()" class="button is-primary">Cadastrar</button>
                  <button @click="backHome()" class="button is-default">Voltar</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        this.$router.push({ path: '/editarbar/' + snap.key });
      });
    },
    backHome: function(){
      this.$router.push({ path: '/' });
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
r/style>
