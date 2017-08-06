<template>
  <div>
    <section class="section" style="padding-top: 1.5rem">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5">
            <div class="image is-2by2">
              <img :src="bar.image">
            </div>
            <br>
            <p>
              {{bar.description}}
            </p>
            <br>
          </div>
          <div class="column is-5 is-offset-1">
            <div class="title is-2">{{bar.name}}</div>
            <p class="subtitle is-6 has-text-muted">{{bar.address.route}}</p>
            <div class="columns is-mobile">
              <div class="column">
                <i 
                  v-for="i in [1, 2, 3, 4, 5]"
                  class="fa fa-star title is-5" 
                  :style="{color: i <= bar.rating ? '#ed6c63' : null}"></i>
              </div>
              <div class="column">
                <strong>{{bar.numReviews}} Reviews</strong>
              </div>
            </div>
            <div class="tabs is-centered is-boxed">
              <ul>
                <li v-on:click="option = 'events'" v-bind:class="{'is-active': option == 'events'}"><a>Eventos</a></li>
                <li v-on:click="option = 'menu'" v-bind:class="{'is-active': option == 'menu'}"><a>Menu</a></li>
              </ul>
            </div>

            <table class="table is-fullwidth" v-if="option === 'events'"  v-show="showEvents">
              <tbody>
                <tr @click="toggleDetails(event.id)" v-for="event in bar.events" v-bind:key="event.name">
                  <td class="">
                    <strong>{{event.name}}</strong>
                  </td>
                  <td class="">
                    {{event.time}}
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table is-fullwidth" v-if="option === 'events'" v-show="showHighlightEvent">
              <tbody>
                <tr @click="toggleDetails(highLightEvent.id)">
                  <td class="">
                    <strong>{{highLightEvent.name}}</strong>
                  </td>
                  <td class="">
                    {{highLightEvent.time}}
                  </td>
                </tr>
                <tr class="">
                  <td colspan="2">
                    {{highLightEvent.description}}
                  </td>
                </tr>
                <tr class="">
                  <td colspan="2">
                    <a v-if="!isShowingAlert" @click="showAlert()" class="button is-warning is-pulled-right">Interesse</a>
                    <div class="notification is-pulled-right is-info" v-if="isShowingAlert">Obrigado pelo interesse! Lembraremos você novamente 2 horas antes do evento.</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table is-fullwidth" v-if="option === 'menu'">
              <tbody>
                <tr v-for="item in bar.menu" v-bind:key="item.item">
                  <td class="">
                    <strong>{{item.item}}</strong>
                  </td>
                  <td class="">
                    {{item.price}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'bar-card',
  data() {
    return {
      option: 'events',
      showEvents: true,
      showHighlightEvent: false,
      highLightEvent: {},
      isShowingAlert: false,
      bar : {
        numReviews: 20,
        rating: 1,
        name: "Bar do Zeca",
        image: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg",
        address: 
        {
          route: "Rua H8B 238, Campus do CTA",
          street_number: 238,
        },
        menu: [
          {item: "Heiniken", price: "R$5"},
          {item: "Coca Cola", price: "R$4"},
          {item: "Água", price: "R$2"},
          {item: "Costelão", price: "R$20"},
        ],
        events: [
          { id: 1, name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00", description: "Medio"},
          { id: 2, name: "Mengao vs Vasco", time: "Sábado, 5 de Agosto 17:00", description: "Otimo"},
          { id: 3, name: "Sao Paulo vs Palmeiras", time: "Sábado, 5 de Agosto 17:00", description: "Legal"},
          { id: 4, name: "Sport vs Vozao", time: "Sábado, 5 de Agosto 17:00", description: "ÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O"},
        ],
        description: "Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!"
      }
    }
  },
  methods: {
    toggleDetails: function(id) {
      var index = this.getArrayIndex(id);
      if (this.showEvents === true) {
        this.highLightEvent = this.bar.events[index];
      }
      this.toggleVisibility();
    },
    toggleVisibility: function () {
      this.showEvents = !this.showEvents;
      this.showHighlightEvent = !this.showHighlightEvent;
      this.isShowingAlert = false;
    },
    getArrayIndex: function(id) {
      return _.findIndex(this.bar.events, function(e) { return e.id === id; });
    },
    showAlert: function() {
      this.isShowingAlert = true;
    }
  }
  //props: ["bar"],
}
</script>


