import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit{
  categoria!: string;
  productos: any[] = []; // explicación: Inicializamos un array vacío para almacenar los productos de la categoría seleccionada

  constructor(private route: ActivatedRoute, private store: TiendaService, private router: Router) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get("categoria")!; // explicación: Obtenemos la categoría de la ruta activa
    this.store.getProductos(this.categoria).subscribe((res) => {
      this.productos = res; // explicación: Llamamos al servicio para obtener los productos de la categoría seleccionada
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalles', id]); // explicación: Navegamos a la ruta de detalles con el ID del producto seleccionado
  }


}
