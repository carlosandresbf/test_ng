import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automaticos-proporcionales-list',
  templateUrl: './automaticos-proporcionales-list.component.html',
  styleUrls: ['./automaticos-proporcionales-list.component.css']
})
export class AutomaticosProporcionalesListComponent implements OnInit {
  modulo: string = 'Automáticos Proporcionales';
  constructor() { }

  ngOnInit() {
  }

}
