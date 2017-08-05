import Vue from 'vue'
import App from './App.vue'
import NewBar from './Newbar.vue'
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

const NotFound = { template: '<p>Page not found</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': App,
  '/about': About,
  '/novobar': NewBar
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// Examples
setTimeout(function() {
  // bar_events.save("id", "name", "date");
  // bar.save("id", "name", "address");
  // console.log(bar.getAll());
  // console.log(bar.getByQuery("address"))
}, 4000);
