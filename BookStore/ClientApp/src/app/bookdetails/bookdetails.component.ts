import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  public book: Book[];

  BookDetails$: Observable<Book>;
  bookId;

  

 
  constructor(private route: ActivatedRoute ,private bookService: BookService) { }

  ngOnInit() {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.getBookDetails();
  }

  getBookDetails() {
    this.BookDetails$ = this.bookService.getBookById(this.bookId)
      .pipe(
        catchError(error => {
          console.log('Error ocurred while fetching book data : ', error);
          return EMPTY;
        }));
  }


  
}
