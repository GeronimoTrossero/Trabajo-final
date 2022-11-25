import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agreag-recetas',
  templateUrl: './agreag-recetas.page.html',
  styleUrls: ['./agreag-recetas.page.scss'],
})
export class AgreagRecetasPage implements OnInit {

  constructor(private alertController: AlertController) {}

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
