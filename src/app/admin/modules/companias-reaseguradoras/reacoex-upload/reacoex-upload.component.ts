import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reacoex-upload',
  templateUrl: './reacoex-upload.component.html',
  styleUrls: ['./reacoex-upload.component.css'],
})

export class ReacoexUploadComponent implements OnInit {
  modulo: string = "Actualización Reacoex";
  dtOptions: DataTables.Settings = {};
  f: FormGroup;
  fileToUpload: File = null;
  filename: string;
  ext: string;
  readyToSend: boolean = false;

  /* private fileUploader: FileUploadServiceService, private elem: ElementRef */
  constructor(private _http: HttpClient, private formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };

    this.f = this.formBuilder.group({
      inputFile: [null, [Validators.required]],
      typeFileInput: [null, [Validators.required]]
    });

  }




}
