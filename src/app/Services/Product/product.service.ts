import { environment } from './../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { product, createProduct } from './../../Models/product/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private apiURL=environment.apiURL + '/products'

  getAll():Observable<product[]>{
    return this.http.get<product[]>(this.apiURL)
  }

  create(product: createProduct){
    return this.http.post(this.apiURL,product);
  }
}
