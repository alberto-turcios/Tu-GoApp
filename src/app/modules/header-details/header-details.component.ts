import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Data } from '@angular/router';

// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;
declare const carousel: String;

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  califications = '4.5';
  description = '';  
  pageTitle = 'default page title';
  image: string = 'https://recetacubana.com/wp-content/uploads/2019/08/arroz-con-camarones-receta.jpg';
  constructor(private route: ActivatedRoute) {}  

  ngOnInit(): void {
  }

}
