import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   
  @Output() parentFunction:EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  sendData(){
    let data={name:'Arjun',age:25}
    this.parentFunction.emit(data)
  }

}
