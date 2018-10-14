import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductService } from './product.service';
import { TransactionService } from './transaction.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { CartComponent } from './cart/cart.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    CartComponent,
    TransactionsComponent,
    ProductsEditComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, TransactionService, MessageService], //MessageService
  bootstrap: [AppComponent]
})
export class AppModule { }
