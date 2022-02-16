import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent implements OnInit {

  @Input()
  book:Book

  constructor() { }
          
   
  ngOnInit() {
  
  }
 

}
