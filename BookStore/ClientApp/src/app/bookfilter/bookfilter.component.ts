import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { category } from '../models/category';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-bookfilter',
  templateUrl: './bookfilter.component.html',
  styleUrls: ['./bookfilter.component.css']
})
export class BookfilterComponent implements OnInit {

  categories$:Observable<category[]>;

  constructor(private bookservice:BookService) { }

  ngOnInit() {
    this.fetchCategories();
  }
  fetchCategories(){
    this.categories$=this.bookservice.categories$
    .pipe(
      catchError(error =>{
        console.log('Error occured while fetching categories list:',error);
        return EMPTY;
      })
      );
  }
  
}
