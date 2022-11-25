import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) { }

  getRecetas() {
    this.http.get('http://localhost:8080/veggie')
    .subscribe(respuesta =>{
      console.log(respuesta);
    })
  }
}
