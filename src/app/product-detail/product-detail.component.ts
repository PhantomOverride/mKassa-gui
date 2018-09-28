import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

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

  @Input()  product: Product;
  @Input()  edit:    boolean;

  @Output() addProduct    = new EventEmitter<Product>();
  @Output() removeProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createNewProduct() {
    console.log("Creating new product");
    this.productService.createProduct(this.product)
      .subscribe(product => {
        console.log(product)
        this.addProduct.emit(product)
      });
  }

  reset() {
    console.log("Reseting product for new a product");
    this.product  = new Product();
    this.edit     = false;
  }

  update(){
    console.log("Update product");
    var response = this.productService.putProduct(this.product)
      .subscribe(product => {
        console.log(product);
        this.removeProduct.emit(this.product);
        this.addProduct.emit(product);
      });
    console.log(response);
  }

  delete(){
  	if( confirm("Really delete the product '" + this.product.name + "'?") ){
  		this.productService.deleteProduct(this.product)
        .subscribe(product => {
          console.log("Removed product");
          console.log(this.product);
          this.removeProduct.emit(this.product);
        });
  	}
  }
}
