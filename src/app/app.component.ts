import { Component } from '@angular/core';
import { BookListService } from './book-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'books-library';

  constructor (//private bookListService: BookListService
    ){
      //this.title = this.bookListService.bookMethod();
  }
}
