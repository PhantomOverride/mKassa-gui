import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionsComponent implements OnInit, DoCheck {

	transactions: Transaction[];
	selectedTransaction: Transaction;
	products: Product[];

  constructor(private transactionService: TransactionService, private productService: ProductService) { }

  ngOnInit() {
  	this.getTransactions();
  	this.getProducts();
  }

  ngDoCheck(){
  	if(!!this.transactions){
	  	this.transactions.sort(function(a,b){
	  	// Flipped; we want youngest on top
	  		var r = 0;
	  		if (a.Created_date > b.Created_date){
	  			r = -1;
	  		}
	  		else if (a.Created_date < b.Created_date) {
	  			r = 1;
	  		}
	  		return r;
	  	});
  	}
  }

  print(t){
  	console.log("Printing...?")
  }

  getTransactions(): void {
  	this.transactionService.getTransactions()
  		.subscribe(transactions => this.transactions = transactions);
  }

  getProducts(): void {
  	this.productService.getProducts()
  		.subscribe(products => this.products = products);
  }

  getProductById(id){
  if(!!this.products){
	  	for (var i = 0; i < this.products.length; i++){
	  		if(this.products[i]._id == id){
	  			return this.products[i];
	  		}
	  	}
  	}
  	return new Product();
  }

}
