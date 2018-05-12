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
  selector: 'app-cuota-aparte',
  templateUrl: './cuota-aparte.component.html',
  styleUrls: ['./cuota-aparte.component.css']
})
export class CuotaAparteComponent implements OnInit {
 
  modulo: string = 'Cuota Parte';
  constructor(private router: Router) { }

  ngOnInit() {
 
  }
  goDetail(){
    this.router.navigate(['admin/contratos/automaticos/proporcionales/cuota-aparte/detalle']);
  }
}
