import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'First-app';
  // counter:number = 0
  counter = 10

  setCounter(to:number = 1){
    if (to === 0) {
      this.counter = 0
    }
    this.counter += to
  }



}
