import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Data } from '@angular/router';


// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;

@Component({
  selector: 'app-next-header',
  templateUrl: './next-header.component.html',
  styleUrls: ['./next-header.component.css']
})
export class NextHeaderComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor(private route: ActivatedRoute) { }

  description = '';  
  pageTitle = 'default page title';
  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.pageTitle = data['title'];
        this.description = data['description'];
      }
    );
  }

}
