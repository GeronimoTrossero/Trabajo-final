import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { Receta } from '../models/recetas.model';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.page.html',
  styleUrls: ['./recetario.page.scss'],
})
export class RecetarioPage implements OnInit {
  recetas: Receta [] = [];
  constructor( private recetaService: RecetaService  ) { 




  this.recetaService.getRecetas()
  .subscribe(resp=> this.recetas =resp);
}
buscarIngrediente( event ){

  console.log(event);

}
  
  

  

  ngOnInit() {
  }
}
