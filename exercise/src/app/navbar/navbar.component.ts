import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  counter : number = 0;
  clickCounter(){
    this.counter = this.counter +10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
