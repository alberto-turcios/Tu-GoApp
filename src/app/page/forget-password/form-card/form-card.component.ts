import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css', 
  '../../../../assets/css/style.css' 
 
]
})
export class FormCardComponent implements OnInit {
  path: string = Path.url;
  constructor() { }
  ngOnInit(): void {
  }

}
