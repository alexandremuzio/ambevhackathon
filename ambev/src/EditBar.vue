<template>
<div>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5">
          <div class="image is-2by2">
            <img :src="bar.image">
          </div>
          <br>
          <div class="field">
            <label class="label">Descrição</label>
            <div class="control">
              <textarea class="textarea" v-bind:placeholder="bar.description" rows="10" cols="50" v-model="newdescription"></textarea>
            </div>
          </div>
          <br>
        </div>
        <div class="column is-5 is-offset-1">
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
              <input class="input" type="text" v-bind:placeholder="bar.address.route" v-model="newaddress">
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
                          <input class="input" type="datetime-local" placeholder="Data" v-model="newtime">
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr><td colspan="2">
                    <div class="field">
                      <div class="control">
                        <textarea class="textarea" placeholder="Descrição" v-model="neweventdescription"></textarea>
                      </div>
                    </div>
                  </td></tr>
                  <tr style="background-color: transparent">
                    <td></td>
                    <td>
                      <span class="icon is-large is-rounded" style="float: right">
                        <i v-on:click="addEvent" class="fa fa-plus is-secondary"></i>
                      </span>
                    </td>
                  </tr>
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
                          <input class="input" type="text" placeholder="Preço (R$)" v-model="newprice">
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr style="background-color: transparent">
                    <td></td>
                    <td>
                      <span class="icon is-large is-rounded" style="float: right">
                        <i v-on:click="addProduct" class="fa fa-plus is-secondary"></i>
                      </span>
                    </td>
                  </tr>
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
import BarLib from "./bar"
import _ from "lodash"
export default {
  data() {
    return {
      option: 'events',
      bar : {
        name: "Bar do Zeca",
        image: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg",
        address: 
        {
          route: "Rua H8B 238, Campus do CTA",
          street_number: 238,
        },        menu: [
          {item: "Heiniken", price: "R$5"},
          {item: "Coca Cola", price: "R$4"},
          {item: "Água", price: "R$2"},
          {item: "Costelão", price: "R$20"},
        ],
        events: [
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00", description: "Jogaço de Futebol."},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00", description: "Jogaço de Futebol."},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00", description: "Jogaço de Futebol."},
          {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00", description: "Jogaço de Futebol."},
        ],
        description: "Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!"
      },
      neweventname:"",
      newtime: "",
      neweventdescription: "",
      newproduct: "",
      newprice: "",
      newname: "",
      newimage: "",
      newaddress: "",
      newdescription: "",
    }
  },
  beforeMount() {
    BarLib.addLoadCallback(
      () => {
        var barId = this.$route.params.id
        // var barId = "-Kqp7dQILIeUzxoGlhLY"
        var allbars = BarLib.getAll()
        console.log(allbars)
        this.bar = _.find(allbars, (b) => b.id == barId)
      }
    )
  },
  methods: {
    addProduct(event) {

      if (this.newproduct && this.newprice) {
        if (!this.bar.menu) this.bar.menu = []
        this.bar.menu.push({item: this.newproduct, price: this.newprice})
        // BarLib.updateBar(this.bar)
        this.newproduct = ""
        this.newprice = ""
      }
    },
    addEvent(e) {
      if (this.neweventname && this.newtime && this.neweventdescription) {
        var neweventobj = {
          name: this.neweventname,
          time: this.processDateTime(this.newtime),
          description: this.neweventdescription
        }
        if(!this.bar.events)  this.bar.events = []
        // this.bar.events.push(neweventobj)
        BarLib.addEvent(this.bar.id, {neweventobj})
        this.neweventname = ""
        this.newtime = ""
        this.neweventdescription = ""
      }
    },
    submitForm(event) {
      this.bar.name = this.newname || this.bar.name
      // if (typeof this.bar.address == "string")
      //   this.bar.address = {route: this.bar.address}
      // this.bar.address.route = this.newaddress || this.bar.address.route
      this.bar.description = this.newdescription || this.bar.description || ""
      BarLib.updateBar(this.bar.id)
    },
    processDateTime(datetime) {
      if (!datetime)  return
      var realdate = new Date(datetime)
      var timestr = realdate.toLocaleTimeString('pt-br')
      var weekdays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
      var months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
      return weekdays[realdate.getDay()] + ', ' + realdate.getDate() + ' de ' + months[realdate.getMonth()] + ' de ' + realdate.getFullYear() + ' às ' + timestr.substring(0,5) + '.'
    }
  },
  props: ["barprop"],
}
</script>


