import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import{Product}from '../product'; 
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  _productlist : Product[];
 public a='';
  constructor(private _service: NgserviceService, private _route: Router,private _ser1:RegistrationService) {
//_ser1 from service
    this.a=this._ser1.temp;
    console.log("product"+this._ser1.temp);
   } 

  ngOnInit(): void {
    this._service.fetchProductListFromRemote().subscribe(
      data => {this._productlist=data,
      
      console.log("response recieved",data);
      },
      error => console.log("response not recieved")

    );
  }

  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }
  goToEditProduct(id: number) {
    console.log("id" + id);
    this._route.navigate(["/editproduct", id]);
  }
  goToViewProduct(id: number) {
    console.log("id" + id);
    this._route.navigate(["/viewproduct", id]);
  }

  deleteProduct(id: number) {
   
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.log("deleted");
        this._route.navigate(['/productlist']);
      },
      error => 
      
      {
        this._route.navigate(['productlist']),
        console.log("exception")
      
      });
  }


}
