importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// ⚠️ WKLEJ TĘ SAMĄ KONFIGURACJĘ CO W INDEX.HTML
const firebaseConfig = {
    apiKey: "AIzaSyCJiTF066XNnH-yLGVNn6XcYD4X37I9UDM",
  authDomain: "aplikacja-608f2.firebaseapp.com",
  projectId: "aplikacja-608f2",
  storageBucket: "aplikacja-608f2.firebasestorage.app",
  messagingSenderId: "1004154231748",
  appId: "1:1004154231748:web:a5a279ad1187367d9ba291",
  measurementId: "G-DTRX50TEDL"

};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Obsługa komunikatów w tle
messaging.onBackgroundMessage((payload) => {
    console.log('Otrzymano komunikat w tle: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png' // ścieżka do ikonki Twojej aplikacji
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});