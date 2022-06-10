import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../model/author';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}admin/allBook`);
  }

  public addBooks(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiServerUrl}admin/book`, book);
  }

  public updateBooks(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiServerUrl}admin/book`, book);
  }

  public deleteBooks(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}admin/book/${bookId}`);
  }

  public getOneBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiServerUrl}customer/all/details/${bookId}`);
  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiServerUrl}admin/allAuthor`);
  }

  public addAuthors(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiServerUrl}admin/author`, author);
  }

  public updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiServerUrl}admin/author`, author);
  }

  public deleteAuthors(authorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}admin/author/${authorId}`);
  }

  public getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.apiServerUrl}admin/allPublisher`);
  }

  public addPublishers(publisher: Publisher): Observable<Publisher> {
    return this.http.post<Publisher>(`${this.apiServerUrl}admin/publisher`, publisher);
  }

  public updatePublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.put<Publisher>(`${this.apiServerUrl}admin/publisher`, publisher);
  }

  public deletePublishers(pubId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}admin/publisher/${pubId}`);
  }

  public getCates(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}admin/allCategory`);
  }

  public addCates(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiServerUrl}admin/category`, category);
  }

  public updateCates(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiServerUrl}admin/category`, category);
  }

  public deleteCates(cateId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}admin/category/${cateId}`);
  }
}
