import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postpaidplans',
  templateUrl: './postpaidplans.component.html',
  styleUrls: ['./postpaidplans.component.css']
})
export class PostpaidplansComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }
  gotopayment(){
    this._router.navigate(['/payment'])
  }
}
