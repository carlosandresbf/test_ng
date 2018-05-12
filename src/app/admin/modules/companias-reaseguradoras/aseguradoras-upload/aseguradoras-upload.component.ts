import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aseguradoras-upload',
  templateUrl: './aseguradoras-upload.component.html',
  styleUrls: ['./aseguradoras-upload.component.css']
})
export class AseguradorasUploadComponent implements OnInit {

  modulo: string = "Actualización Aseguradoras";
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };

  }

}
