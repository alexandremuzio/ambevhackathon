import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BarPreview from './BarPre.vue'
import EditBar from './EditBar.vue'
import NewBar from './Newbar.vue'
import BarPage from './Bar.vue'
import * as firebase from 'firebase';
import bar_events from './bar_events'
import bar from './bar'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2kLOSWlLkiw-uOiuhZhnWYrAhe2e-4Oc",
  authDomain: "hackathonambev.firebaseapp.com",
  databaseURL: "https://hackathonambev.firebaseio.com",
  projectId: "hackathonambev",
  storageBucket: "",
  messagingSenderId: "375550617353"
};
firebase.initializeApp(config);
bar.start();
bar_events.start();

Vue.use(VueRouter);

const NotFound = { template: '<p>Page not found</p>' }

const routes = [
  { path: '/preview', component: BarPreview },
  { path: '/bar/:id', component: BarPage },
  { path: '/editarbar', component: EditBar },
  { path: '/novobar', component: NewBar },
  { path: '/', component: App },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')

// setInterval(function() {
//  bar.addEvent("-KqpX7b7y6fPIvlVo7Cz", 
//    {name: "Atlético Mineiro vs Cruzeiro",
//     time: "Sábado, 5 de Agosto 17:00"})
// }, 4000);