import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})
export class PrepaidplansComponent implements OnInit {

  constructor(private  _router: Router) { }

  ngOnInit(): void {
  }
gotopayment(){
  this._router.navigate(['/payment'])
}

}
