import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  name = 'Child 2';
  @Input() msgFromParent2: any[];

  currentMsgToParent = '';
  msgFromChild2 = []

  constructor() { }

  ngOnInit() {
  }

}
