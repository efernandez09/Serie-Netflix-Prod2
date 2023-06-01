importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js');

firebase.initializeApp({
    projectId: 'prod2-serienetflix',
    appId: '1:8734869459:web:bdadd0530b79914ed15126',
    storageBucket: 'prod2-serienetflix.appspot.com',
    locationId: 'europe-west2',
    apiKey: 'AIzaSyCo9Flk_rWy686Dpmj0BUqpWRxt4ILsDK0',
    authDomain: 'prod2-serienetflix.firebaseapp.com',
    messagingSenderId: '8734869459',
   });
   
const messaging = firebase.messaging();