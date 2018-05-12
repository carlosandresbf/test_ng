import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';

@Component({
  selector: 'app-contratos-list',
  templateUrl: './contratos-list.component.html',
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {

  calendar: JQuery;

  modulo: string = 'Contratos';
  constructor() { }

  ngOnInit() {


    this.calendar = jQuery('#calendar').datepicker({
      format: 'yyyy',
      viewMode: "years",
      minViewMode: "years"
    });

  }

}
