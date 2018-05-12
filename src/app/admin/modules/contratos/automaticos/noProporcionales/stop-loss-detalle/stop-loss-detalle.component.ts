import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-loss-detalle',
  templateUrl: './stop-loss-detalle.component.html',
  styleUrls: ['./stop-loss-detalle.component.css']
})
export class StopLossDetalleComponent implements OnInit {

  modulo: string = 'Detalle - Stop Loss';
  constructor() { }

  ngOnInit() {
  }

}
