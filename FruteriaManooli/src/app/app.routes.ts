import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},    
    {path: 'listado', component: ListadoProductosComponent },    
    {path: 'producto/:id', component: ProductoComponent},    
    {path: 'carrito', component: CarritoComponent},    
    {path: '**', component: NotfoundComponent}    
];
