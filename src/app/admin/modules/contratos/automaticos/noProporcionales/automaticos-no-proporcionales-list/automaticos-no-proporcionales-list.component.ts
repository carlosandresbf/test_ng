import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automaticos-no-proporcionales-list',
  templateUrl: './automaticos-no-proporcionales-list.component.html',
  styleUrls: ['./automaticos-no-proporcionales-list.component.css']
})
export class AutomaticosNoProporcionalesListComponent implements OnInit {
  modulo: string = 'Automáticos No Proporcionales';
  constructor() { }

  ngOnInit() {
  }

}
