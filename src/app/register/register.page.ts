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
<br>
<br>
<br>
<br>


    <ion-content>

    
      <ion-item >  

      <ion-icon name="person-outline" slot="start"></ion-icon>
  
      <ion-label position="floating">Nombre</ion-label>
        <br>
        <ion-input  [(ngModel)]="nombre" type="text" placeholder="Ingresa tu Nombre"></ion-input>
      
        <ion-label position="floating">Apellido</ion-label>
        <br>
        <ion-input  [(ngModel)]="apellido" type="text" placeholder="Ingresa tu Apellido"></ion-input>

        <ion-label position="floating">RUN</ion-label>
        <br>
        <ion-input  [(ngModel)]="run" type="text" placeholder="RUN sin guion Ej:9876543k"></ion-input>

        <ion-label position="floating">Correo electronico</ion-label>
        <br>
        <ion-input  [(ngModel)]="mail" type="text" placeholder="Ingresa correo electronico"></ion-input>

      </ion-item>
      


      <div>
        <ion-button id="btnSiguiente"
          size="large"
          (click)="pruebaClickbtnSiguiente()" 
          color="secondary" 
          expand="block"
        >Siguiente</ion-button>
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
  nombre: string = '';
  apellido: string = '';
  run: string = '';
  mail: string = '';
  ejemplo:string = '';  /* esperando para asignacion futura */




  goBack() {  
    this.navCtrl.navigateBack('/');  
  } 

  pruebaClickLogin() {
    console.log('Botón btnGuardarRegistro clickeado');
    this.navCtrl.navigateForward('/home');
  }

  pruebaClickbtnSiguiente() {
    console.log('Botón btnGuardarRegistro clickeado');
    this.navCtrl.navigateForward('/register2');
    

  }
}
