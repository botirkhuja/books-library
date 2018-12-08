import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListItemsComponent } from './book-list-items/book-list-items.component';
import { BookListService } from './book-list.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
