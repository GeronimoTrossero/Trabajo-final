import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Receta } from '../models/recetas.model';
@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) { }

  getRecetas() {
    return this.http.get<Receta[]>('http://localhost:8080/receta');
    
  }
}
