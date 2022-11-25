import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Receta } from '../app/models/recetas.model';
@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetas = [];
  receta: any = {}

  constructor(private http: HttpClient) { }

  getRecetas() {
    return this.http.get<Receta[]>('http://localhost:8080/receta');
    
  }
  postRecetas(){
  this.http.post<Receta[]>('http://localhost:8080/receta', this.receta).subscribe((res:any)=>{
    console.log(res);
   } );
}
}
  


