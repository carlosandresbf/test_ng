import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativo-pdetalle',
  templateUrl: './facultativo-pdetalle.component.html',
  styleUrls: ['./facultativo-pdetalle.component.css']
})
export class FacultativoPdetalleComponent implements OnInit {

  modulo: string = 'Detalle por Reasegurador';
  constructor() { }

  ngOnInit() {
  }

}
