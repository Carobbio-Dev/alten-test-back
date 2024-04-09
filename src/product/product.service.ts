import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import productJson from '../assets/products.json'; // This import style requires "esModuleInterop", see "side notes"

@Injectable()
export class ProductService {
  private readonly products: IProduct[];

  constructor() {
    this.products = productJson.data as IProduct[];
  }

  create(product: IProduct) {
    this.products.push(product);
  }

  findAll(): IProduct[] {
    return this.products;
  }

  findOne(id: number): IProduct {
    return this.products[id];
  }

  update(id: number, product: IProduct) {
    this.products[id] = product;
  }

  remove(id: number) {
    this.products.splice(id, 1);
  }
}
