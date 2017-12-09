import { Component, OnInit, ViewEncapsulation, Input, DoCheck } from '@angular/core';

//import {NgModule} from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../product';
import { Transaction } from '../transaction';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit, DoCheck {

  @Input() products: Product[];
  sum: number;

  stageShop: boolean;
  stageCheckout: boolean;
  stageConfirm: boolean;
  paymentMethod: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.stageShop = true;
  	this.stageCheckout = false;
  	this.stageConfirm = false;
  }

  calcSum(){
  let s = 0;
    if (!!this.products) {
	    for (var i = 0, len = this.products.length; i < len; i++) {
	  		s += this.products[i].price;
		}
	}
	return s;
  }

  checkout(){
  	var t = new Transaction();
  	t.paymentMethod = this.paymentMethod;
  	t.amountPaid = this.sum;
  	t.products = this.products;
  	var r = this.productService.postTransaction(t);
  	
  	this.products.splice(0,999);
  	this.initShopping();
  }

  ngDoCheck(){
  	//console.log("docheck");
  	this.sum = this.calcSum();
  }

  removeItem(product){
  	//console.log(product);
  	for(var i = 0, len = this.products.length; i < len; i++) {
  		if (this.products[i]._id == product._id){
  			this.products.splice(i, 1);
  			break;
  		}
  	}
  }

  setPayment(type){
  	this.paymentMethod = type;
  }

  initAbort(){
  	this.stageCheckout = false;
  	this.stageShop = true;
  	this.stageConfirm = false;
  }

  initCheckout(){
  	this.stageCheckout = true;
  	this.stageShop = false;
  	this.stageConfirm = false;
  }

  initConfirm(){
  	this.stageCheckout = false;
  	this.stageShop = false;
  	this.stageConfirm = true;
  }

  initShopping(){
  	this.stageCheckout = false;
  	this.stageShop = true;
  	this.stageConfirm = false;
  }

}
