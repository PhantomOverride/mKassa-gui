import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  cart: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.getProducts();
  }

  onSelect(product: Product): void {
  	//this.selectedProduct = product;
  	
  	//alert(typeof(this.cart));
  	if (typeof(this.cart) == 'undefined'){
  		this.cart = new Array();
  	}
  	this.cart.push(product);
  	this.cart.sort(function(a,b){
  		var r = 0;
  		if(a.name < b.name) {
  			r = -1;
  		}
  		else if (a.name > b.name){
  			r = 1;
  		}
  		return r;
  	});
  }

  getProducts(): void {
  	//this.products = this.productService.getProducts();
  	this.productService.getProducts()
  		.subscribe(products => this.products = products);
  }

}
