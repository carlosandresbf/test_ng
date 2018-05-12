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
  selector: 'app-tent-plan',
  templateUrl: './tent-plan.component.html',
  styleUrls: ['./tent-plan.component.css']
})
export class TentPlanComponent implements OnInit {

  calendar: JQuery;
  modulo: string = 'Tent Plan';
  constructor(private router: Router) { }

  ngOnInit() {
    this.calendar = jQuery('.calendar').datepicker({
      format: 'yyyy-mm-dd'
    });
  }
  goDetail() {
    this.router.navigate(['admin/contratos/automaticos/noproporcionales/tentplan/detalle']);
  }
}
