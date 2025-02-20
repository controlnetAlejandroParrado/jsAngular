import { Component } from '@angular/core';
import { Fruta } from '../../../../interfaces/fruta.interface';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  @Input() fruta!: Fruta =
}
