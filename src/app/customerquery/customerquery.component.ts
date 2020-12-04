import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerquery',
  templateUrl: './customerquery.component.html',
  styleUrls: ['./customerquery.component.css']
})
export class CustomerqueryComponent implements OnInit {
  firstName = '';
  lastName = '';
  mailUser = '';
  constructor(private router: Router) {
    this.firstName = localStorage["firstNameUser"];
  this.lastName = localStorage["lastNameUser"];
  this.mailUser=localStorage["emailUser"]; }

  ngOnInit(): void {
  }
  trans() {
    console.log(this.mailUser);
    this.router.navigate(['/transaction/'+this.mailUser]);
  }

}
