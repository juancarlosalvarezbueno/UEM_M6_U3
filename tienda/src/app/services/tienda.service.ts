import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url = 'https://fakestoreapi.com'; 

  constructor(private http: HttpClient) {} // explicación: Inyectamos HttpClient para hacer peticiones HTTP

  getCategorias(){
    return this.http.get<string[]>(`${this.url}/products/categories`); // explicación: Método para obtener las categorías desde la API, ponemos string[] porque esperamos un array de strings
  }
  getProductos(categoria:string){
    return this.http.get<any[]>(`${this.url}/products/category/${categoria}`); // explicación: Método para obtener los productos de una categoría específica, ponemos any[] porque esperamos un array de objetos
  }
  getDetalles(id:number){
    return this.http.get<any>(`${this.url}/products/${id}`); // explicación: Método para obtener los detalles de un producto específico, ponemos any porque esperamos un objeto
  }
}
