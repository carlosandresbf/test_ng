import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultativos-no-proporcionales-list',
  templateUrl: './facultativos-no-proporcionales-list.component.html',
  styleUrls: ['./facultativos-no-proporcionales-list.component.css']
})
export class FacultativosNoProporcionalesListComponent implements OnInit {
  modulo: string = 'Facultativos No Proporcionales';
  constructor() { }

  ngOnInit() {
  }

}
