<template>
<div>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="image is-2by2">
            <img :src="bar.image">
          </div>
          <br>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" v-bind:placeholder="bar.description" rows="10" cols="50" v-model="newdescription"></textarea>
            </div>
          </div>
          <br>
        </div>
        <div class="column">
          <a v-on:click="submitForm" class="button is-primary">Confirmar</a>
          <hr>
          <div class="title is-2">
            <div class="field">
              <label class="label">Nome do Bar</label>
              <div class="control">
                <input class="input" type="text" v-bind:placeholder="bar.name" v-model="newname">
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Endereço</label>
            <div class="control">
              <input class="input" type="text" v-bind:placeholder="bar.address" v-model="newaddress">
            </div>
          </div>
          <hr> 
          <div class="section">
            <div class="container">
              <div class="tabs">
                <ul>
                  <li v-on:click="option = 'events'" v-bind:class="{'is-active': option == 'events'}"><a>Eventos</a></li>
                  <li v-on:click="option = 'menu'" v-bind:class="{'is-active': option == 'menu'}"><a>Menu</a></li>
                </ul>
              </div>

              <table class="table" v-if="option == 'events'">
                <tbody>
                  <tr v-for="event in bar.events" v-bind:key="event.name">
                    <td class="has-text-right">
                      <strong>{{event.name}}</strong>
                    </td>
                    <td>{{event.time}}</td>
                  </tr>
                  <tr>
                    <td class="has-text-right">
                      <div class="field">
                        <div class="control">
                          <input class="input has-text-right" type="text" placeholder="Novo Evento" v-model="neweventname">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="Data" v-model="newtime">
                        </div>
                      </div>
                    </td>
                  </tr>
                  <a v-on:click="addEvent" class="button is-secondary">Adicionar Evento</a>
                </tbody>
              </table>

              <table class="table" v-if="option == 'menu'">
                <tbody>
                  <tr v-for="item in bar.menu" v-bind:key="item.item">
                    <td class="has-text-right">
                      <strong>{{item.item}}</strong>
                    </td>
                    <td>{{item.price}}</td>
                  </tr>
                  <tr>
                    <td class="has-text-right">
                      <div class="field">
                        <div class="control">
                          <input class="input has-text-right" type="text" placeholder="Novo Produto" v-model="newproduct">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="Preço R$" v-model="newprice">
                        </div>
                      </div>
                    </td>
                  </tr>
                  <a v-on:click="addProduct" class="button is-secondary">Adicionar Produto</a>
                </tbody>
              </table>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      option: 'events',
      bar : {
        name: "Bar do Zeca",
        image: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg",
        address: "Rua H8B 238, Campus do CTA, São José dos Campos",
        menu: [
          {item: "Heiniken", price: "R$5"},
          {item: "Coca Cola", price: "R$4"},
          {item: "Água", price: "R$2"},
          {item: "Costelão", price: "R$20"},
        ],
        events: [
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
        ],
        description: "Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!"
      },
      neweventname:"",
      newtime: "",
      newproduct: "",
      newprice: "",
      newname: "",
      newimage: "",
      newaddress: "",
      newdescription: "",
    }
  },
  methods: {
    addProduct(event) {
      if (this.newproduct && this.newprice) {
        this.bar.menu.push({item: this.newproduct, price: this.newprice})
        this.saveBar(this.bar)
        this.newproduct = ""
        this.newprice = ""
      }
    },
    addEvent(event) {
      if (this.neweventname && this.newtime) {
        this.bar.events.push({name: this.neweventname, time: this.newtime})
        this.saveBar(this.bar)
        this.neweventname = ""
        this.newtime = ""
      }
    },
    submitForm(event) {
      var newbar = {
        name: this.newname || this.bar.name,
        address: this.newaddress || this.bar.address,
        menu: this.bar.menu,
        events: this.bar.events,
        description: this.newdescription || this.bar.description,
      }
      this.saveBar(newbar)
      // go back
    },
    saveBar(bar) {
      // save to firebase
    }
  }
}
</script>


