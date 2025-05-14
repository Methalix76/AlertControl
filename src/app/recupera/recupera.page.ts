import { Component } from '@angular/core';  
import { IonicModule } from '@ionic/angular';  
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

          <ion-title>   Recuperar contraseña  </ion-title>  
      </ion-toolbar>  
    </ion-header>  

    <ion-content>
       <div class="image-container">
          <img src="assets/img/alert control 4.png">
        </div>
    </ion-content>

    <ion-toolbar>
      <ion-title>Completa los campos</ion-title>
    </ion-toolbar>

<ion-content class="ion-padding">
  
<!-- Input para nombre, se debe importar formsModule, por el standalone-->
  <ion-item>
        <ion-label position="floating">Usuario</ion-label>
        <br>
        <ion-input  [(ngModel)]="Usuario" type="text" placeholder="max 50 caracteres"></ion-input>

        <ion-label position="floating">Correo electronico</ion-label>
        <br>
        <ion-input  [(ngModel)]="mail" type="text" placeholder="Ingresa correo electronico"></ion-input>
  </ion-item>

</ion-content>

<ion-button id="btnRecuppass" 
  size="large"
  (click)="pruebaClickRecuppass()" 
  color="primary" 
  expand="block"
  >Resetear Contraseña
  </ion-button>



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


export class RecuperaPage {  
  constructor(private navCtrl: NavController) {}  
  Usuario: string = '';
  mail: string = '';
  
  goBack() {  
    this.navCtrl.navigateBack('/');  
  }    

  pruebaClickRecuppass() {
    console.log('Botón btnRecuppass clickeado');
    alert('btnRecuppass funcional!');
  }

}  