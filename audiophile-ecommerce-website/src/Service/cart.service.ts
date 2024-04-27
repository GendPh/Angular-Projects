import { ProductCart } from "../Model/product.model";

export class CartService {
  cartList: ProductCart[] = [
    new ProductCart(1, 1, "xx99-mark-two-headphones", "XX99 MARK II", 2999),
    new ProductCart(2, 1, "xx99-mark-one-headphones", "XX99 MARK I", 1750),
    new ProductCart(3, 1, "xx59-headphones", "XX59", 899),
    new ProductCart(4, 1, "zx9-speaker", "ZX9", 4500),
  ];

  AddProduct(product: ProductCart) {
    this.cartList.push(product);
  }
  RemoveProduct(product: ProductCart) {
    this.cartList.splice(this.cartList.indexOf(product), 1);
  }
  RemoveAll() {
    this.cartList = [];
  }
  Total() {
    return this.cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}