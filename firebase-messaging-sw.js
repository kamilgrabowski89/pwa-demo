importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Twoja konfiguracja w wersji kompatybilnej dla Service Workera
const firebaseConfig = {
    apiKey: "AIzaSyCJiTF066XNnH-yLGVNn6XcYD4X37I9UDM",
    authDomain: "aplikacja-608f2.firebaseapp.com",
    projectId: "aplikacja-608f2",
    storageBucket: "aplikacja-608f2.firebasestorage.app",
    messagingSenderId: "1004154231748",
    appId: "1:1004154231748:web:a5a279ad1187367d9ba291"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Logika przechwytywania powiadomienia, gdy telefon jest zablokowany lub aplikacja zamknięta
messaging.onBackgroundMessage((payload) => {
    console.log('Otrzymano komunikat w tle:', payload);

    const notificationTitle = payload.notification.title || "Nowy komunikat B2B";
    const notificationOptions = {
        body: payload.notification.body || "Otwórz aplikację, aby zobaczyć szczegóły.",
        icon: "icon-192.png", // Nazwa pliku Twojej ikonki na pulpicie
        badge: "icon-192.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});