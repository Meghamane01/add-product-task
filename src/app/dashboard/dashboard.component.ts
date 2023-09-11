import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addTableForm: FormGroup | any;
  allTableData: any[] = [];
  ProductList: any = [];
  ItemList: any[]=[];

  


  constructor(private prodServ: ProductService) {
    this.ProductList = this.prodServ.getProductList()
    // this.allTableData = this.prodServ.getProductList()
   
  }

  ngOnInit(): void {
    // console.log(this.ProductList);
    this.addTableForm = new FormGroup({
      rName: new FormControl('', Validators.required),
      rQty: new FormControl('', Validators.required),
      rRuup: new FormControl('', Validators.required),
    })
  }
  addToBag(addTableForm: any) {
    // console.log(this.ProductList);
    // console.log(addTableForm);
    this.allTableData.push(addTableForm)
    // console.log(this.allTableData);
    this.ItemList=[...new Set(this.allTableData)]
  }


  changeOrderNumber(change:any,item : any){
    if(change == 'plus'){
      item.qty++
    }else if(change == 'minus'){
      if(item.qty <=0){
        return
      }else{
        item.qty--
      }
    }
  }
}
