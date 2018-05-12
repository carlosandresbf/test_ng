import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-aseguradoras',
  templateUrl: './list-aseguradoras.component.html',
  styleUrls: ['./list-aseguradoras.component.css']
})
export class ListAseguradorasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  constructor() { }
  modulo: string = 'Aseguradoras';
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
