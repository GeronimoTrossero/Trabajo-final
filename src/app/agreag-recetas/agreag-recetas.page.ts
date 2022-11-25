import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agreag-recetas',
  templateUrl: './agreag-recetas.page.html',
  styleUrls: ['./agreag-recetas.page.scss'],
})
export class AgreagRecetasPage implements OnInit {
  boton: any;
  agregarRec: any;

  constructor(
    private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Genial',
      message: 'Tu receta ha sido guardada con éxito',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
  

}
