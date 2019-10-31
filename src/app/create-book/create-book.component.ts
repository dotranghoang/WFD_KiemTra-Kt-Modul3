import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  inputBook = new FormControl();
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  createBook() {
    if (this.inputBook.value == null) {
      return alert('Vui lòng điền tên');
    }
    const book: Partial<Book> = {
      name: this.inputBook.value
    };
    console.log(book);
    return this.bookService.createBook(book).subscribe(
      next => {
        alert('Thêm mới thành công');
        this.inputBook.setValue('');
        document.location.reload();
      }, error => {
        alert('Thêm mới thất bại');
      }
    );
  }
}
