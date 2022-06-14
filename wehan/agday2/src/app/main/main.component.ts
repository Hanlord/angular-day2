import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cars: Array<{name: string, age:number, img:string}>=[
    {
    name: "Benz",
    age: 0,
    img: "assets/pics/benz.jpg"
  },{
    name: "Benz",
    age: 0,
    img: "assets/pics/benz.jpg"
  },{
    name: "Benz",
    age: 0,
    img: "assets/pics/benz.jpg"
  }

];

  constructor() { }

  ngOnInit(): void {
  }

}


