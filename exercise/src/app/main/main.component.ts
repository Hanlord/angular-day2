import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cars: Array<{ brand: string, build: number,img: string }> = [

    {
      brand: "Mercedes",
      build: 2022,
      img:"assets/mercedes.jpg"
    },{
      brand: "BMW",
      build: 2020,
      img:"assets/bmw.jpg"
    },{
      brand:"Audi",
      build:2021,
      img:"assets/audi.jpg"
    }
 
   ];
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
