import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos-new',
  templateUrl: './contratos-new.component.html',
  styleUrls: ['./contratos-new.component.css']
})
export class ContratosNewComponent implements OnInit {

  modulo: string = 'Registrar Contrato';
  constructor() { }

  ngOnInit() {
  }

}
