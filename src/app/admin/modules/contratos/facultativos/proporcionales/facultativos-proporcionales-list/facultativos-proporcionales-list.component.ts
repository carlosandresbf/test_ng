import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativos-proporcionales-list',
  templateUrl: './facultativos-proporcionales-list.component.html',
  styleUrls: ['./facultativos-proporcionales-list.component.css']
})
export class FacultativosProporcionalesListComponent implements OnInit {
  modulo: string = 'Facultativos Proporcionales';
  constructor() { }

  ngOnInit() {
  }

}
