import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { Transaction } from './transaction';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:3000/product';
  private transactionsUrl = 'http://localhost:3000/transaction';

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
  	this.messageService.add('ProductService: fetched products');
  	//return of(PRODUCTS);
  	return this.http.get<Product[]>(this.productsUrl);
  }

  createProduct(p){
    return this.http.post<Product>(this.productsUrl, p).subscribe();
  }

  putProduct(p) {
    return this.http.put<Product>(this.productsUrl + "/" + p._id, p).subscribe();
  }

  deleteProduct(p) {
    return this.http.delete<Product>(this.productsUrl + "/" + p._id, p).subscribe();
  }

  postTransaction(t) {
  	return this.http.post<Transaction>(this.transactionsUrl,t).subscribe();
  }


  private log(message: string) {
  	this.messageService.add('HeroService: ' + message);
  }

}
