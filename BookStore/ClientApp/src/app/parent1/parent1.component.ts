import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit { 
  name="";
  age;
  parentFunction(data){
    console.log(data)
    this.name=data.name;
    this.age=data.age;
  }

  constructor() { }

  ngOnInit() {
  }

}
