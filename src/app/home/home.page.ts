import { Component } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header></ion-header>
    <ion-content>
      <div class="ion-padding content-container">
        <!-- Imagen centrada con margen -->
        <div class="image-container">
          <img src="assets/img/alert control 3 75p.png" 
            alt="Alert Control Image"
            class="custom-image"
          >
        </div>
        <!-- Botón btnprueba -->
        <ion-button id="btnlogin" 
          size="large"
          (click)="pruebaClickLogin()" 
          color="primary" 
          expand="block"
        >Entrar</ion-button>
        <p> Aun no estas registrado? <img src="assets/img/flecha abajo.png" 
            class="custom-image">
        <ion-button id="btnregistro"
          size="default"
          (click)="pruebaClickRegistro()" 
          color="secondary" 
          expand="block"
        >R e g i s t r a t e</ion-button>
      </div>
    </ion-content>
  `,
  styles: [
    `
    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .image-container {
      margin: 20px 0;
      text-align: center;
    }
    .custom-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    @media (min-width: 768px) {
      .custom-image {
        max-width: 75%;
      }
    }
    `
  ]
})
export class HomePage {
  constructor(private navCtrl: NavController, private loadingController: LoadingController) {}

  async pruebaClickLogin() {
    console.log('Botón btnlogin clickeado');
    const loading = await this.loadingController.create({
      message: 'Dirigiendo a Login...',
      duration: 300 // Duración en milisegundos
    });
    await loading.present();
    setTimeout(() => {
      this.navCtrl.navigateForward('/login');
    }, 1000); // Asegúrate que la duración coincida con la del loading
  }

  pruebaClickRegistro() {
    console.log('Botón btnregistro clickeado');
    this.navCtrl.navigateForward('/register');
  }
}
