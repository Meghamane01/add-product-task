import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit {
 
  // isNewProduct: boolean = false;
  // myProductForm: FormGroup | any;
  constructor(private activeRoute: ActivatedRoute,
    private prodServ: ProductService, private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
//     this.initForm();
//     this.myProductForm = new FormGroup({
//       uImg: new FormControl('', Validators.required),
//       pName: new FormControl(null, Validators.required),
//       pRuup: new FormControl(null, Validators.required)
//     })

//   }


//   initForm() {

//     this.myProductForm = this.fb.group({
//       rImg: this.fb.control('', Validators.required),
//       rName: this.fb.control('', Validators.required),
//       rRuup: this.fb.control('', Validators.required),
//       rProduct : this.fb.array([ ])

//     })

//   }

//   onSubmit(){
//     console.log(this.myProductForm);
//     // this.myFormObj.reset()
//     const prodlist :any=[];



//   const productObj = new Product(this.myProductForm.value.rImg, this.myProductForm.value.rName,
//     this.myProductForm.value.rRuup);

//   if(this.isNewProduct) {
//     const newlyAddedRecipeIndex = this.prodServ.addNewRecipe(productObj);
//     this.router.navigate(['../' + (newlyAddedRecipeIndex - 1)], { relativeTo: this.activeRoute })
//   }else{
//   // this.prodServ.setNewlyEditedRecipeObj(productObj);
//   this.router.navigate(['../'], { relativeTo: this.activeRoute })
// }
// this.myProductForm.reset()

  
}

navigateto(){
  this.router.navigate(['/form'])
}
}