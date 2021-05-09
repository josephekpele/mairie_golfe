importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

var config = {
    apiKey: "<Web API Key>",
    authDomain: "<Project ID>.firebaseapp.com",
    databaseURL: "https://<Project ID>.firebaseio.com",
    projectId: "<Project ID>",
    storageBucket: "<Project ID>.appspot.com",
    messagingSenderId: "<Messenging Sender ID>"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();