import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../config.js';
declare const login: any;
declare const body: any;
declare const title: String;
declare const name: String;
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {
  path: string = Path.url;
  typeSelected: string;
  onClick(){
    body();
  }

  title = 'ngx-interactive-paycard-demo';
  cardNumberFormat = '#### #### #### ####';
  cardNumberMask = '#### **** **** ****';

 
  onSubmitEvent($event: any) {
    console.log($event);
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
