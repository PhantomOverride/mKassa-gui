import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

//import { Product } from '../product';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../product';
//import { Transaction } from '../transaction';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  delete(){
  	if( confirm("Really delete the product '" + this.product.name + "'?") ){
  		var r = this.productService.deleteProduct(this.product);
  	}
  	location.reload();
  }

  add(){
  	if ( confirm("Really insert a new empty product?") ){
  		this.insertNewProduct();
  		location.reload();
  	}
  }

  insertNewProduct(){
  	var p = new Product;
  	p.name = "New Product";
  	p.price = 0;
  	p.imageUrl = "/assets/products/sample.png";
  	p.category = "None";

  	this.productService.createProduct(p);

  }

  save(){
  	alert("Saving...");
  	var r = this.productService.putProduct(this.product);
  	location.reload();
  	
  /*
  	var t = new Transaction();
  	t.paymentMethod = this.paymentMethod;
  	t.amountPaid = this.sum;
  	t.products = this.products;
  	var r = this.productService.postTransaction(t);
  	
  	this.products.splice(0,999);
  	this.initShopping();
  	*/
  }

}
