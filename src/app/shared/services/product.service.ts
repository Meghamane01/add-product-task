import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // myDatabaseUrl: string = 'https://angular-task-1-d17e9-default-rtdb.firebaseio.com/product.json'

  ProductList: any = [
    new Product(
      'https://5.imimg.com/data5/IU/RM/SZ/SELLER-105049696/gemini-1lt-refined-sunflower-oil-mrp-140-500x500.jpg',
      'Product 1',
      '$ RM 300.00',
      '1'
      
    ),
    new Product(
      'https://m.media-amazon.com/images/I/71qMRn40n9L._SX522_.jpg',
      'Product 2',
      '$ RM 15.00',
      '1'
     
    )
  ]
getProductList(){
  return this.ProductList.slice()
}
addNewProduct(newProduct: any){
  this.ProductList.push(newProduct)
}

}
