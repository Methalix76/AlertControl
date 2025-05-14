import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    // Agrega los providers de los otros módulos que necesites
  ],
  exports: [
    // Exporta los módulos que necesites usar en otros módulos
  ]
})
export class FirebaseModule { }
