import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // isNewProduct:boolean|any;
   myProductForm: FormGroup | any;
  
  constructor(private activeRoute: ActivatedRoute,
    private prodServ: ProductService, private router: Router, private fb: FormBuilder,) { }
  ngOnInit() {
    this.myProductForm = this.fb.group({
      rImg: this.fb.control('', Validators.required),
      rName: this.fb.control('', Validators.required),
      rRuup: this.fb.control('', Validators.required),
      rQty: this.fb.control('',Validators.required),

    })
}
onSubmit(){
  console.log(this.myProductForm.value);
}
getProductValue(){
  const productObj=new Product(this.myProductForm.value.rImg=this.imgFile,this.myProductForm.value.rName,this.myProductForm.value.rRuup,
    this.myProductForm.value.rQty)
    const newAddedProduct=this.prodServ.addNewProduct(productObj)
}
photo : any;
imgFile : any;

onSelectImage(e: any){
  this.photo =e.target.files[0];
  var reader =new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event : any)=>{
    this.imgFile = event.target.result;
  }
}
}
