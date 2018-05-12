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
  selector: 'app-facob',
  templateUrl: './facob.component.html',
  styleUrls: ['./facob.component.css']
})
export class FacobComponent implements OnInit {
  calendar: JQuery;
  modulo: string = 'FACOB';
  constructor(private router: Router) { }

  ngOnInit() {
    this.calendar = jQuery('.calendar').datepicker({
      format: 'yyyy-mm-dd'
    });
  }
  goDetail() {
    this.router.navigate(['admin/contratos/automaticos/proporcionales/facob/detalle']);
  }
}
