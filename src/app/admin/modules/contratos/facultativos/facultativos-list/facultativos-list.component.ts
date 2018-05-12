import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativos-list',
  templateUrl: './facultativos-list.component.html',
  styleUrls: ['./facultativos-list.component.css']
})
export class FacultativosListComponent implements OnInit {

  modulo: string = 'Facultativos';
  constructor() { }

  ngOnInit() {
  }

}
