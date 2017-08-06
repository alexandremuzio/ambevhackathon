import * as firebase from 'firebase'; import _ from 'lodash'

var bars = []
var callbacks = []

// Update bars the first time.
function start() {
  firebase.database().ref('bar').once('value').then(function(snapshot) {
    console.log("get stuff")
    _.forEach(snapshot.val(), (value, key) => {
      var bar = value;
      bar.id = key;
      bars.push(bar)
    });
    _.forEach(callbacks, c => c())
  });
}

function addLoadCallback(c) {
  callbacks.push(c)
}

function addEvent(barId, eventObj) {
    var tags = eventObj.name.split(" ");
    
    var bar = _.find(bars, function(o) {console.log(o); return o.id === barId});

    if (!bar.events) {
        bar.events = [];
    }
    bar.events.push(eventObj);

    _.forEach(tags, function(tag) {
        bar.tags.push(tag);
    });

    var updates = {}
    updates['bar/' + barId] = bar 
    
    firebase.database().ref().update(updates);
}

function updateBar(barId) {

    var bar = _.find(bars, function(o) {console.log(o); return o.id === barId});    
    firebase.database().ref('bar/' + barId).set(bar);
}

function save(name, address) {
  var tags = name.split(" ");
  return firebase.database().ref('bar').push({
    name: name,
    address: address,
    tags: tags
  });
}

function getByQuery(searchQuery) {
  if(searchQuery === null || searchQuery === '')
  {
    return getAll()
  }
  var tokens = searchQuery.split(" ");
  return bars.filter(
    bar =>
    tokens.some((token, index, tags) => bar.tags.includes(token)));
}

function getAll() {
  return bars;
}

export default {
    start : start,
    addEvent : addEvent,
    updateBar : updateBar,
    addLoadCallback: addLoadCallback,
    save : save,
    getAll: getAll,
    getByQuery: getByQuery
}
