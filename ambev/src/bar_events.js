import * as firebase from 'firebase';


var events = []

// Update events the first time.
function start() {
    firebase.database().ref('events').once('value').then(function(snapshot) {
        _.forEach(snapshot.val(), e => events.push(e));
    });
}

function save(id, name, date) {
    firebase.database().ref('events').push({
        id: id,
        name: name,
        date, date
    });
}

export default {
    start : start,
    save : save,
}
