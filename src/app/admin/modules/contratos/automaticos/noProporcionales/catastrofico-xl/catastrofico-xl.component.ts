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
  selector: 'app-catastrofico-xl',
  templateUrl: './catastrofico-xl.component.html',
  styleUrls: ['./catastrofico-xl.component.css']
})
export class CatastroficoXlComponent implements OnInit {

  calendar: JQuery;

  modulo: string = 'Catastrófico XL';
  constructor(private router: Router) { }

  ngOnInit() {

    this.calendar = jQuery('.calendar').datepicker({
      format: 'yyyy-mm-dd'
    });

  }
  goDetail() {
    this.router.navigate(['admin/contratos/automaticos/noproporcionales/catastroficoxl/detalle']);
  }
}
