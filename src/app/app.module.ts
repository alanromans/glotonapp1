import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, indexedDBLocalPersistence, initializeAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore, initializeFirestore } from '@angular/fire/firestore';
import { persistentLocalCache } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { Capacitor } from '@capacitor/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Firebase
    provideFirebaseApp(() => {
      const app = initializeApp(environment.firebaseConfig);
      if (Capacitor.isNativePlatform()) {
        initializeFirestore(app, {
          localCache: persistentLocalCache(),
        });
      }
      initializeAuth(app, {
        persistence: indexedDBLocalPersistence,
      });
      return app;
    }),
    provideAuth(() => getAuth()), // Para autenticación
    provideFirestore(() => getFirestore()), // Para Firestore
    provideStorage(() => getStorage()), // Para Storage
    provideFunctions(() => getFunctions()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService, // Para rastrear las visitas de pantallas
    UserTrackingService, // Para rastrear y asociar eventos al usuario
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}