<template>
<div>
  <div class="section product-header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <!-- <span class="title is-3">{{name}}</span> -->
          <!-- <span class="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
          <span class="title is-4 has-text-muted">Category</span> -->
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-5 is-offset-1">
          <div class="title is-2">{{bar.name}}</div>
          <p class="title is-6 has-text-muted">Rua H8B 238, Campus do CTA, São José dos Campos</p>
          <hr> 
          <br>
          <p class="">
            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
            <i class="fa fa-star title is-5"></i>
            <i class="fa fa-star title is-5"></i>
            &nbsp; &nbsp;
            <strong>41 Reviews</strong>
            &nbsp; &nbsp;
            <a href="#">show all</a>
          </p>
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
  name: 'bar-card',
  data() {
    return {
      option: 'events',
      bar : {
        name: "Bar do Zeca",
        image: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg",
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
      }
    }
  },
  // props: ["bar"],
}
</script>


