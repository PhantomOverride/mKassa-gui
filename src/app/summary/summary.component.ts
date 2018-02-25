import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit, DoCheck{

	transactions: Transaction[];
	products: Product[];
	resolved_products: Object[];
	totalCard: number;
	totalCash: number;
	transactionsCard: number;
	transactionsCash: number;

  constructor(private transactionService: TransactionService, private productService: ProductService) { }

  ngOnInit() {
  	this.getTransactions();
  	this.getProducts();
  }

  ngDoCheck(){
  	if(!!this.transactions && !!this.products)
	  	this.resolve();
  }

  resolve(): void {
  	this.resolved_products = [];
  	this.totalCard = 0;
  	this.totalCash = 0;
  	this.transactionsCard = 0;
  	this.transactionsCash = 0;

  	// Calculate total per payment method
  	// For all transactions
  	for (var j = 0; j < this.transactions.length; j++){
  		// Skip rejected transactions when counting
  		if(this.transactions[j].rejected) continue;

  		if(this.transactions[j].paymentMethod == "card"){
  			this.transactionsCard++;
  			this.totalCard += this.transactions[j].amountPaid;
  		}
  		else if(this.transactions[j].paymentMethod == "cash"){
  			this.transactionsCash++;
  			this.totalCash += this.transactions[j].amountPaid;
  		}
  		else{
  			console.error("Transaction paid with invalid method: " + this.transactions[j].paymentMethod);
  		}
  	}

  	// Calculate products sold per product type
  	// For all products
  	for (var i = 0; i < this.products.length; i++){
  		this.resolved_products.push({ "_id": this.products[i]._id, "name": this.products[i].name, "price":this.products[i].price, "sold": 0 });

  		// For all transactions
  		for (var j = 0; j < this.transactions.length; j++){
  			// Skip rejected transactions when counting
  			if(this.transactions[j].rejected) continue;

  			// For all the products referenced in the current transaction
  			for (var k = 0; k < this.transactions[j].products.length; k++){
  				if(this.transactions[j].products[k] == this.resolved_products[i]["_id"]){
  					//If the current product is part of the current transaction, then increment the amount sold
  					this.resolved_products[i]["sold"]++;
  				}
  			}
  		}
  	}
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
