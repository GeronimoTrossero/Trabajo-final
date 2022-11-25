import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../models/recetas.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(recetas: Receta[], texto: string): Receta[] {
    
    if ( texto.length === 0 )  {return recetas;}
       
    texto = texto.toLocaleLowerCase();

    return recetas.filter( recetas  => {
      return recetas.ingredientes.toLocaleLowerCase().includes(texto);

    })

  }

}
