import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit{
  categorias:string[]=[];

  constructor(private store: TiendaService, private router: Router) { 
    // explicación: Inyectamos StoreService para acceder a las categorías y Router para navegar
  }
  ngOnInit():void {
    this.store.getCategorias().subscribe((res) => (this.categorias=res));
    console.log(this.categorias); // explicación: Llamamos al servicio para obtener las categorías y las almacenamos en el array categorias
  }
  

  verProductos(categorias: string) {
    this.router.navigate(['/productos', categorias]); // explicación: Navegamos a la ruta de productos con la categoría seleccionada
  }
}
