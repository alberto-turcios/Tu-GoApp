import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Data } from '@angular/router';

// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.css',  
  '../../../assets/css/app.css', 
  '../../../assets/css/style.css',]
})
export class SimpleHeaderComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  description = '';  
  pageTitle = 'default page title';
  constructor(private route: ActivatedRoute) {}  

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.pageTitle = data['title'];
        this.description = data['description'];
      }
    );
  }

}
