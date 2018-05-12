import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automaticos-list',
  templateUrl: './automaticos-list.component.html',
  styleUrls: ['./automaticos-list.component.css']
})
export class AutomaticosListComponent implements OnInit {

  modulo: string = 'Automaticos';
  constructor() { }

  ngOnInit() {
  }

}
