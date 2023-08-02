import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  
  productList:undefined | product[]
  constructor(private product:ProductService){}

  ngOnInit():void {
    this.product.ProductList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }

}
