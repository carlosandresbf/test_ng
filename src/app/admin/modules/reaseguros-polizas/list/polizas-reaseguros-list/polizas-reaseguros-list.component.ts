import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polizas-reaseguros-list',
  templateUrl: './polizas-reaseguros-list.component.html',
  styleUrls: ['./polizas-reaseguros-list.component.css']
})
export class PolizasReasegurosListComponent implements OnInit {

  modulo: string = 'Reaseguro Polizas';
  constructor() { }

  ngOnInit() {
  }

}
