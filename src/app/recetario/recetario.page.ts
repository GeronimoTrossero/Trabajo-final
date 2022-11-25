import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.page.html',
  styleUrls: ['./recetario.page.scss'],
})
export class RecetarioPage implements OnInit {

lista: string[];
  button: any;
  alertController: any;

  constructor() { 
  this.inicializar();
}

  inicializar(){
    this.lista = [
      'aceite',
      'calabaza',
      'queso',
      'sal',
      'pimienta',
      'oliva',
      'berros',
      'limón',
      'lechuga',
      'chile',
      'frijol',
      'jitomates',
      'tortillas',
      'miel',
    ];
  }

  

  ngOnInit() {
  }
}
