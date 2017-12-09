import { Product } from './product';

export class Transaction {
  _id: string;
  paymentMethod: string;
  amountPaid: number;
  products: Product[];
  Created_date: string;
}