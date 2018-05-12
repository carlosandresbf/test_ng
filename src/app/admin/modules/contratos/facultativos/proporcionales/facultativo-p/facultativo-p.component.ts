import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';
@Component({
  selector: 'app-facultativo-p',
  templateUrl: './facultativo-p.component.html',
  styleUrls: ['./facultativo-p.component.css']
})
export class FacultativoPComponent implements OnInit {
  calendar: JQuery;
  modulo: string = 'Proporcionales - Facultativo';
  constructor(private router: Router) { }

  ngOnInit() {
  this.calendar = jQuery('.calendar').datepicker({
    format: 'yyyy-mm-dd'
  });
  }
  goDetail() {
    this.router.navigate(['admin/contratos/facultativos/proporcionales/facultativo/detalle']);
  }
}
