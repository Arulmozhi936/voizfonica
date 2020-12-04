import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  firstName = '';
  constructor() { }

  
  ngOnInit(): void {
    this.firstName = localStorage["firstName"];
  }

}
