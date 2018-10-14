import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsEditComponent implements OnInit {

  products: Product[];
  selectedProduct: Product = new Product();
  edit: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(): void {
  	this.productService.getProducts()
  		.subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
  	this.selectedProduct = product;
    this.edit = true;
    console.log(this.edit);
  }
  onAdded(product: Product): void {
    this.products.push(product);
  }
  onRemove(product: Product): void {
    this.products = this.products.filter(obj => obj._id != product._id);
  }

}
