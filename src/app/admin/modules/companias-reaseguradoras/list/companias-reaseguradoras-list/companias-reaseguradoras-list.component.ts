import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companias-reaseguradoras-list',
  templateUrl: './companias-reaseguradoras-list.component.html',
  styleUrls: ['./companias-reaseguradoras-list.component.css']
})
export class CompaniasReaseguradorasListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};


  constructor() { }
  modulo: string = 'Compañias';
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
