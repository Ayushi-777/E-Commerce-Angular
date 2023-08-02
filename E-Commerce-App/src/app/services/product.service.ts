import { Injectable } from '@angular/core';
import { product } from '../data-type';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, private router: Router) { }

  addProduct(data: product) {
    return this.http.post("http://localhost:3000/products", data)

  }
  ProductList(){
    return this.http.get<product[]>("http://localhost:3000/products");
  }
}
