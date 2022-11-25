import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.page.html',
  styleUrls: ['./recetario.page.scss'],
})
export class RecetarioPage implements OnInit {

lista: string[];

  constructor( private recetaService: RecetaService  ) { 
  this.recetaService.getRecetas();
}

  
  



  ngOnInit() {
  }
}
