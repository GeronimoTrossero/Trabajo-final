import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Receta } from '../models/recetas.model';
import { HttpClient } from '@angular/common/http';
import { RecetaService } from '../../services/receta.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-agreag-recetas',
  templateUrl: './agreag-recetas.page.html',
  styleUrls: ['./agreag-recetas.page.scss'],
})
export class AgreagRecetasPage implements OnInit {



   
  recetas = [];
  receta: any = {};



  boton: any;
  agregarRec: any;

  constructor(
    private alertController: AlertController, private recetaService: RecetaService ) {
      this.recetaService.postRecetas()

    
    }
    

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
Submit(){
  this.receta.postRecetas
}
    
  

}
