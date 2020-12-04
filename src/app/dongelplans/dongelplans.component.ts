import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dongelplans',
  templateUrl: './dongelplans.component.html',
  styleUrls: ['./dongelplans.component.css']
})
export class DongelplansComponent implements OnInit {

  constructor(private  _router: Router) { }

  ngOnInit(): void {
  }
  gotopayment(){
    this._router.navigate(['/payment'])
  }

}
