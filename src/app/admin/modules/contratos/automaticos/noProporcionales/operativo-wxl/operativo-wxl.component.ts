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
  selector: 'app-operativo-wxl',
  templateUrl: './operativo-wxl.component.html',
  styleUrls: ['./operativo-wxl.component.css']
})
export class OperativoWxlComponent implements OnInit {

  calendar: JQuery;
  modulo: string = 'Operativo WXL';
  constructor(private router: Router) { }

  ngOnInit() {

    this.calendar = jQuery('.calendar').datepicker({
      format: 'yyyy-mm-dd'
    });
    
  }
  goDetail() {
    this.router.navigate(['admin/contratos/automaticos/noproporcionales/operativowxl/detalle']);
  }
}
