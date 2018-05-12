import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excedente-detalle',
  templateUrl: './excedente-detalle.component.html',
  styleUrls: ['./excedente-detalle.component.css']
})
export class ExcedenteDetalleComponent implements OnInit {

  modulo: string = 'Detalle por Reasegurador';
  constructor() { }

  ngOnInit() {
  }

}
