importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCJiTF066XNnH-yLGVNn6XcYD4X37I9UDM",
    authDomain: "aplikacja-608f2.firebaseapp.com",
    projectId: "aplikacja-608f2",
    storageBucket: "aplikacja-608f2.firebasestorage.app",
    messagingSenderId: "1004154231748",
    appId: "1:1004154231748:web:a5a279ad1187367d9ba291"
});

const messaging = firebase.messaging();
// Nie dopisujemy tu żadnej logiki wywołującej "dymki".
// Biblioteka Firebase sama przejmuje kontrolę i wyświetla okienka systemowe, 
// gdy nadejdzie standardowa wiadomość typu "Notification" z konsoli.

// Wymóg instalacji PWA: "Zaślepka" zdarzenia fetch
self.addEventListener('fetch', function(event) {
    // Przeglądarka widzi ten nasłuchiwacz i pozwala na wyświetlenie monitu o instalacji
});