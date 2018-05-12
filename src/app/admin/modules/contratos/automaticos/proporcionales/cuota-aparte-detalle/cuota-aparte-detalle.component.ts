import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuota-aparte-detalle',
  templateUrl: './cuota-aparte-detalle.component.html',
  styleUrls: ['./cuota-aparte-detalle.component.css']
})
export class CuotaAparteDetalleComponent implements OnInit {

  modulo: string = 'Detalle por Reasegurador';
  constructor() { }

  ngOnInit() {
  }

}
