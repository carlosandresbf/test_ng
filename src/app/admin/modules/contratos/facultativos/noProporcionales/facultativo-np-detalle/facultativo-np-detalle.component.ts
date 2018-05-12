import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativo-np-detalle',
  templateUrl: './facultativo-np-detalle.component.html',
  styleUrls: ['./facultativo-np-detalle.component.css']
})
export class FacultativoNpDetalleComponent implements OnInit {
  modulo: string = 'Detalle por Reasegurador';
  constructor() { }

  ngOnInit() {
  }

}
