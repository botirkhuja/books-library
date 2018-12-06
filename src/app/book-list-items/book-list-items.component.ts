import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list-items',
  templateUrl: './book-list-items.component.html',
  styleUrls: ['./book-list-items.component.scss']
})
export class BookListItemsComponent implements OnInit {

  public listOfUsers = [
     {
    id: 1,
    name:'One',
    author: 'One to One',
    totalAmount:5,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'math',
    
     }, 
     {
    id: 2,
    name:'Two',
    author: 'Someone',
    totalAmount:5,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'romance',
     },
     {
    id: 3,
    name:'Three',
    author: 'Anyone',
    totalAmount:5,
    dates:'Tue Nov 13 2018 16:33:06 GMT-0600 (Eastern Time)',
    category: 'history',
      }
 ]

  constructor() { }

  ngOnInit() {
  }

}
