import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { map, shareReplay } from 'rxjs/operators';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 

  baseURL='https://localhost:44387/api';

  constructor(private http:HttpClient) { }
    
  books$ =this.getAllBooks().pipe(shareReplay(1));

  getAllBooks(){
    return this.http.get<Book[]>(this.baseURL +"/books")
  }

  addtocart(bookId : number){
    debugger;
    return this.http.post<number>(this.baseURL +'/CartItems/AddCartItem/',bookId);
  }

  getBookById(id: number) {
    return this.books$.pipe(map(book => book.find(b => b.bookId === id)));
  }
  categories$=this.http.get<category[]>(this.baseURL +'/Categories')

 
}
