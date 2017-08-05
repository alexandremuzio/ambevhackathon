import * as firebase from 'firebase';

var bars = []

function save(id, name, address) {
    var db = firebase.database();

    firebase.database().ref('bar').set({
        id: id,
        name: name,
        address: address
    });
}

export default {
    save : save,
}