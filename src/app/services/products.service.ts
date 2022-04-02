import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_produccion} from '../../environments/environment';
import { Product, ProductResponse} from '../models/products.interface';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(`${api_produccion.API_URL}products_customer`)
    .pipe(
      map(response => response.productos)
    )
  }
}


