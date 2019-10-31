import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddBookComponent} from './add-book/add-book.component';
import {CreateBookComponent} from './create-book/create-book.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'create-book',
  component: CreateBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
