import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativo-obligatorio',
  templateUrl: './facultativo-obligatorio.component.html',
  styleUrls: ['./facultativo-obligatorio.component.css']
})
export class FacultativoObligatorioComponent implements OnInit {

  modulo: string = 'Facultativo Obligatorio';
  constructor() { }

  ngOnInit() {
  }

}
