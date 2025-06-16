import { Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoriasComponent
    },
    {
        path: 'productos/:categoria',
        component: ProductosComponent
    },
    {
        path: 'detalles/:id',
        component: DetallesComponent
    }

];
