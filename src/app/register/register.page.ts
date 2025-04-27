import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `

    <ion-header [translucent]="true">  
      <ion-toolbar> 
          <ion-title>REGISTRO USUARIOS</ion-title>  
          <ion-buttons slot="end">
            <ion-button (click)="goBack()" class="custom-back-button" fill="clear">
              <img src="assets/img/left_2.png">
            </ion-button>
          </ion-buttons> 
      </ion-toolbar>  
    </ion-header>

      <h3>Favor ingresa los datos solicitados:</h3>

    <ion-content>

      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
              <br>
        <ion-input [(ngModel)]="Nombre" type="text" placeholder="Ingresa tu Nombre"></ion-input>
      
        <ion-label position="floating">Apellido</ion-label>
              <br>
        <ion-input [(ngModel)]="Apellido" type="text" placeholder="Ingresa tu Apellido"></ion-input>

        <ion-label position="floating">Correo electronico</ion-label>
              <br>
        <ion-input [(ngModel)]="mail" type="text" placeholder="Ingresa correo electronico"></ion-input>

        <ion-label position="floating">RUN</ion-label>
              <br>
        <ion-input [(ngModel)]="run" type="text" placeholder="Ingresa RUN"></ion-input>

        <ion-label position="floating">Tratamiento</ion-label>
              <br>
        <ion-input [(ngModel)]="tratamiento" type="text" placeholder="ingresa tu diagnostico"></ion-input>
    </ion-item>
      
    <br>
 

      <div>
        <ion-button id="btnGuardarRegistro"
          size="large"
          (click)="pruebaClickGuardarRegistro()" 
          color="secondary" 
          expand="block"
        >Registrarse</ion-button>
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
export class RegisterPage {
  constructor(private navCtrl: NavController) {}
  Nombre: string = '';
  Apellido: string = '';
  mail: string = '';
  run: string = '';
  tratamiento: string = '';
  int5: string = '';
  ejemplo:string = '';









  goBack() {  
    this.navCtrl.navigateBack('/');  
  } 

  pruebaClickLogin() {
    console.log('Botón btnGuardarRegistro clickeado');
    this.navCtrl.navigateForward('/home');
  }

  pruebaClickGuardarRegistro() {
    console.log('Botón btnGuardarRegistro clickeado');
    alert('¡ registro guardado funcional!');
  }
}
