import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListItemsComponent } from './book-list-items/book-list-items.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: LogInComponent,
    pathMatch:'full'
  },   
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'BookListItemsComponent',
    component: BookListItemsComponent
  },
  {
    path:'**',
    redirectTo:'LogInComponent',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
