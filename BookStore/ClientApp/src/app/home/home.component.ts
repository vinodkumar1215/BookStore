import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import {catchError, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit  {
 
  public books:Book[];
  public totalbooks:Book[];
  category:string;

  constructor(private bookService: BookService,private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.getAllBookData();
   
  }
  getAllBookData(){
    this.bookService.books$.pipe(switchMap(
      (data:Book[])=>{
         this.books=data;
         this.totalbooks=data;
        return this.route.queryParams;
      }
    )).subscribe(params =>{
      this.category=params.category;

      this.getfilterdata();
    });
  }
  getfilterdata(){
    if(this.category!=null){
      this.books=this.totalbooks.filter(x =>x.category.toLowerCase()===this.category.toLowerCase());
    }
  }

   
}
