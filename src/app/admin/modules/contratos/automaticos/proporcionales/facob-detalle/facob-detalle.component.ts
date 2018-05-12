import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facob-detalle',
  templateUrl: './facob-detalle.component.html',
  styleUrls: ['./facob-detalle.component.css']
})
export class FacobDetalleComponent implements OnInit {

  modulo: string = 'Detalle por Reasegurador';
  constructor() { }
  ngOnInit() {
  }

}
