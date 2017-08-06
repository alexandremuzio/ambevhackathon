<template>
  <div>
    <section class="section">
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

            <table class="table is-fullwidth" v-if="option === 'events'">
              <tbody>
                <tr v-for="event in bar.events" v-bind:key="event.name">
                  <td class="">
                    <strong>{{event.name}}</strong>
                  </td>
                  <td class="">
                    {{event.time}}
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
      // bar : {
      //   numReviews: 20,
      //   rating: 1,
      //   name: "Bar do Zeca",
      //   image: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg",
      //   address: 
      //   {
      //     route: "Rua H8B 238, Campus do CTA",
      //     street_number: 238,
      //   },
      //   menu: [
      //     {item: "Heiniken", price: "R$5"},
      //     {item: "Coca Cola", price: "R$4"},
      //     {item: "Água", price: "R$2"},
      //     {item: "Costelão", price: "R$20"},
      //   ],
      //   events: [
      //     {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
      //     {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
      //     {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
      //     {name: "Atlético Mineiro vs Cruzeiro", time: "Sábado, 5 de Agosto 17:00"},
      //   ],
      //   description: "Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!  Bar maneirão cheio de eventos maneiros. O PATRÃO ENLOUQUECEEEEU!!!!"
      // }
    }
  },
  props: ["bar"],
}
</script>


