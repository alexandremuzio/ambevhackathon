import * as firebase from 'firebase';


var events = []

function save(id, name, date) {
    var db = firebase.database();

    firebase.database().ref('events').set({
        id: id,
        name: name,
        date, date
    });
}

export default {
    save : save,
}