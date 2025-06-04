import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "del-maijia",
        appId: "1:916691167098:web:eabc5921914dc9f29f18c3",
        storageBucket: "del-maijia.firebasestorage.app",
        apiKey: "AIzaSyBAE_nTjYpy9VLB3qifVVywpTz_vmhBgbI",
        authDomain: "del-maijia.firebaseapp.com",
        messagingSenderId: "916691167098",
        measurementId: "G-JRK701SJ0T"

      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideHttpClient(),
  ],
};
