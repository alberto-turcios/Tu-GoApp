import { Component, OnInit } from '@angular/core';
import { categories } from '../../../models/category.interface.js';
import { CategoryService } from '../../../services/category.service';


// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;

@Component({
  selector: 'app-tienda-header',
  templateUrl: './tienda-header.component.html',
  styleUrls: ['./tienda-header.component.css',
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css']
})

export class TiendaHeaderComponent implements OnInit {
  categories : categories[] = [];
  path: string = Path.url;
  title_1 = 'Encuentra';
  paragraphs_1 = 'El producto que nececistes';
  onClick(){
    body();
  }
  constructor(private service: CategoryService) { }
  ngOnInit():void {
    this.getCategory();
  }

  public getCategory(){
    this.service.getCategories().
    subscribe(next =>{
      this.categories = next
    })
  }

  objectKeys (objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }

}
