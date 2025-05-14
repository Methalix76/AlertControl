import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';   
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment'; 

 if (environment.production) {
enableProdMode();
}

 bootstrapApplication(AppComponent, {
providers: [
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
provideRouter(routes),
provideIonicAngular(),
// Registra los providers de Firebase
provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
provideAuth(() => getAuth()),
// Agrega los providers de los otros módulos que necesites
// provideFirestore(() => getFirestore()),
// provideDatabase(() => getDatabase()),
// provideStorage(() => getStorage()),
// provideFunctions(() => getFunctions()),
// provideMessaging(() => getMessaging()),
// provideRemoteConfig(() => getRemoteConfig()),
// provideAnalytics(() => getAnalytics()),
// providePerformance(() => getPerformance())
],
}).catch((err) => console.log(err));
