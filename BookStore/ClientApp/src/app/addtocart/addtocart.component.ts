import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  @Input()
  bookId : number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    //this.addtocart();

  }
  // addtocart(){
  //   this.bookService.addtocart(this.bookId)
  //   // .subscribe(data =>{
  //   //   console.log(data)
  //   //   this.addtocart();
  //   // })
  // }
  
  addcart(){
    this.bookService.addtocart(this.bookId)
    .subscribe(data =>{
      console.log(data)
       
    })
  }

}
