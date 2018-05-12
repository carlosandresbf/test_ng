import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-aseguradoras',
  templateUrl: './aseguradoras.component.html',
  styleUrls: ['./aseguradoras.component.css']
})
export class AseguradorasComponent implements OnInit {
  modulo: string = 'Registrar Aseguradora';
  type="";
  constructor(private route: ActivatedRoute) {
  this.type = this.route.snapshot.params.type;
  }

  ngOnInit() {


  }

}
