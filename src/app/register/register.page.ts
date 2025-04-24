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
      </ion-toolbar>  
    </ion-header>
 
    <ion-content>
    <p>Favor ingrese los datos solicitados</p>
      <div class="ion-padding content-container">
      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input [(ngModel)]="Nombre" type="text"></ion-input>

        <ion-label position="floating">Apellido</ion-label>
        <ion-input [(ngModel)]="Apellido" type="text"></ion-input>

        <ion-label position="floating">Correo electronico</ion-label>
        <ion-input [(ngModel)]="mail" type="text"></ion-input>

        <ion-label position="floating">Run</ion-label>
        <ion-input [(ngModel)]="run" type="text"></ion-input>

        <ion-label position="floating">tratamiento</ion-label>
        <ion-input [(ngModel)]="tratamiento" type="text"></ion-input>

        <ion-label position="floating">int5</ion-label>
        <ion-input [(ngModel)]="int5" type="text"></ion-input>
      </ion-item>
</div>

<div>

        <ion-button id="btnGuardarRegistro"
          size="default"
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
