import { Component } from '@angular/core';  
import { IonicModule, LoadingController } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';  
import { NavController } from '@ionic/angular';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',  
  standalone: true,  
  imports: [IonicModule, CommonModule, FormsModule],
  template: `  
    <ion-header [translucent]="true">  
      <ion-toolbar> 
        <ion-buttons slot="end">
          <ion-button (click)="goBack()" class="custom-back-button" fill="clear">
            <img src="assets/img/left_2.png">
          </ion-button>
        </ion-buttons> 
        <ion-title>INGRESO</ion-title>  
      </ion-toolbar>  
    </ion-header>  

    <ion-content>
      <div class="image-container">
        <img src="assets/img/alert control 4.png">
      </div>
    </ion-content>

    <ion-toolbar>
      <ion-title>Ingresa tus Datos</ion-title>
    </ion-toolbar>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Usuario ó Correo</ion-label>
        <ion-input [(ngModel)]="nombre" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input [(ngModel)]="contrasena" type="password"></ion-input>
      </ion-item>

      <div style="text-align: end;">
        <a (click)="navigateToRecupera()" style="color: var(--ion-color-primary); text-decoration: none; cursor: pointer;">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </ion-content>

    <ion-button id="btnValidacion" 
      size="large"
      (click)="pruebaClickValidacion()" 
      color="primary" 
      expand="block"
    >Entrar</ion-button>
  `,  
  styles: [  
    `  
    .custom-back-button {  
      background-color: white;  
      color: black;  
      border-radius: 0;  
      border: 1px solid #ccc;  
      padding: 10px;  
      display: flex;  
      align-items: center;  
      justify-content: center;  
    }  

    .image-container {
      margin: 20px 0;
      text-align: center;
    }

    ion-icon {  
      margin-right: 8px;  
    }  
    `  
  ]  
})
export class LoginPage {
  nombre: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private loadingController: LoadingController){}  

  async pruebaClickValidacion() {
    console.log('Botón btnValidacion clickeado');
    const loading = await this.loadingController.create({
      message: 'Validando informacion...',
      duration: 750
    });
    await loading.present();
    setTimeout(() => {
      this.navCtrl.navigateForward('/login');
    }, 300);
  }

  goBack() {  
    this.navCtrl.navigateBack('/');  
  }    
  navigateToRecupera() {
    this.navCtrl.navigateForward(['/recupera']);
  }

}
