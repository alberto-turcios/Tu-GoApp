import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Data } from '@angular/router';

// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;
declare const carousel: String;
@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.css']
})
export class HeaderCategoryComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }

  description = '';  
  pageTitle = 'default page title';
  image: string = '';
  constructor(private route: ActivatedRoute) {}  

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.pageTitle = data['title'];
        this.description = data['description'];
        this.image = data['image'];
      }
    );
  }

}
