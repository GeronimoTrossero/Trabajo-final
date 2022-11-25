import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { recetaJsonPlaceholder } from '../interfaces/recetas';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {

  async getRecetadetalle(id: number): Promise<recetaJsonPlaceholder> {
    const jsonData = await this.getReceta();
    const receta = jsonData.filter((receta) => receta.id == id);
    return receta.length > 0 ? receta[0] : {};
  }

  async getReceta(): Promise<recetaJsonPlaceholder[]> {
    const data = await fetch('http://localhost:8080/recetas');
    return await data.json();
  }

  async editReceta(receta: recetaJsonPlaceholder) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'receta', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(receta),
    });
    return await res.json();
  }

  async addReceta(receta: recetaJsonPlaceholder){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'receta', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(receta),
    });
    return await res.json();
  }

  async deleteReceta(id:number):Promise<boolean>{
    const res = await fetch(BACKEND_URL+'receta'+id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.ok;
  }
}