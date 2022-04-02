import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_produccion} from '../../environments/environment';
import { categories, categoriesResponse } from '../models/category.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<categories[]> {
    return this.http.get<categoriesResponse>(`${api_produccion.API_URL}category`)
    .pipe(
      map(response => response.categories)
    )
  }
}
