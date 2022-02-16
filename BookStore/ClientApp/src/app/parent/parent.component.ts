import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data={
    name:"arjun",
    age:26,
    email:"arjun@123.com",
    course:"angular"
  }

  constructor() { }

  ngOnInit() {
  }

}
