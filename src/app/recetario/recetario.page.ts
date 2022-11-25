import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../models/recetas.model';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.page.html',
  styleUrls: ['./recetario.page.scss'],
})
export class RecetarioPage implements OnInit {
  textoBuscar = '';
  recetas: Receta [] = [];
  constructor( private recetaService: RecetaService  ) { 

  this.recetaService.getRecetas()
  .subscribe(resp=> this.recetas =resp);
}
buscarIngrediente( event ){


const texto = event.target.value;
this.textoBuscar = texto;

}
  
  

  

  ngOnInit() {
  }
}
