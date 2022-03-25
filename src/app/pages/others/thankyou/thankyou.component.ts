import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molla-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Thank you page loaded")
  }

}
