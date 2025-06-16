import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private store: TiendaService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.getDetalles(id).subscribe((res) => (this.producto = res));
  }
}

