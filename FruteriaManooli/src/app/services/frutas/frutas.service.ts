import { Injectable, provideZoneChangeDetection } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  private frutas: Fruta[] = [
    { id: 1, nombre: 'Manzana', precio: 1.5, favorita: false },
    { id: 2, nombre: 'Platano', precio: 1.2, favorita: false },
    { id: 3, nombre: 'Naranja', precio: 1.8, favorita: false },
    { id: 4, nombre: 'Melon', precio: 2, favorita: false },
    { id: 5, nombre: 'Maracuya', precio: 4, favorita: false },
  ]

  getFrutas() {
    return this.frutas;
  }

  getFrutaByID(id: number) {
    return this.frutas.find(fruta => fruta.id === id);
  }

  toggleFavorita(id: number) {
    const fruta = this.getFrutaByID(1)
    if (fruta) {
      fruta.favorita = !fruta.favorita;
    }
  }
}
