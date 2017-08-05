import * as firebase from 'firebase';
import _ from 'lodash'

var bars = []

// Update bars the first time.
function start() {
    firebase.database().ref('bar').once('value').then(function(snapshot) {
        _.forEach(snapshot.val(), e => bars.push(e));
    });
}

function save(id, name, address) {
    firebase.database().ref('bar').push({
        id: id,
        name: name,
        address: address
    });
}

function getByQuery(searchQuery) {
    var tags = searchQuery.split(" ");
    return bars.filter(
        bar =>
            tags.some((tag, index, tags) => _.includes(bar, tag)));
}

function getAll() {
    return bars;
}

export default {
    start : start,
    save : save,
    getAll: getAll,
    getByQuery: getByQuery
}