import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  num=10;
  constructor() { }

  ngOnInit(): void {
  }
  x=setInterval(()=>{
    if(this.num>9938646)
    {
      clearInterval(this.x)
    }
    else{
      this.num=this.num+5007
    }
  },100)
}
