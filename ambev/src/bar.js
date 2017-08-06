import * as firebase from 'firebase'; import _ from 'lodash'

var bars = []

// Update bars the first time.
function start() {
    firebase.database().ref('bar').once('value').then(function(snapshot) {
        _.forEach(snapshot.val(), (value, key) => {
            var bar = value;
            bar.id = key;
            bars.push(bar)
        });
    });
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
    save : save,
    getAll: getAll,
    getByQuery: getByQuery
}
