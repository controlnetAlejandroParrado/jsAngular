import { Component } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { FrutasService } from '../../services/frutas/frutas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [RouterModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  frutas: Fruta[] = []
  mostrarfavoritos: boolean = false

  constructor(
    private frutasService:FrutasService
  ) {
    this.frutas = this.frutasService.getFrutas()
  }

  toggleFavorito(id: number) {
    this.frutasService.toggleFavorita(id)
  }

  toggleMostrarFavoritos() {
    this.mostrarfavoritos = !this.mostrarfavoritos
  }

  get frutasFiltradas(){
    return this.mostrarfavoritos
      ? this.frutas.filter(fruta => fruta.favorita)
      : this.frutas
  }
}
