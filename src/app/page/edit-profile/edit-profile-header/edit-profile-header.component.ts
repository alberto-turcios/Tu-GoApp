import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
import { NgxSpinnerService } from 'ngx-spinner';

declare const body: any;
declare const title: String;
declare const name: String;

@Component({
  selector: 'app-edit-profile-header',
  templateUrl: './edit-profile-header.component.html',
  styleUrls: ['./edit-profile-header.component.css',  
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class EditProfileHeaderComponent implements OnInit {

  path: string = Path.url;
  typeSelected: string;
  onClick(){
    body();
  }
  constructor(private spinnerService: NgxSpinnerService) { 
    this.typeSelected = 'ball-fussion';
  }

  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }

  ngOnInit(): void {
  }




}
