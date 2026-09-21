importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAqnVv76hqGgQiPJHLWWFlF_8wsgRk0cdQ",
  authDomain: "nikami-b5a45.firebaseapp.com",
  databaseURL: "https://nikami-b5a45-default-rtdb.firebaseio.com",
  projectId: "nikami-b5a45",
  storageBucket: "nikami-b5a45.firebasestorage.app",
  messagingSenderId: "1033787624852",
  appId: "1:1033787624852:web:188fb97dc5752744a01381"
});

const messaging = firebase.messaging();

// Background Message Handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://cdn-icons-png.flaticon.com/512/134/134937.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
