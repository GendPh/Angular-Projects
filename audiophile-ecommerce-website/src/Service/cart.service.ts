import { ProductCart } from "../Model/product.model";

export class CartService {
  cartList: ProductCart[] = [
    new ProductCart(1, 1, "xx99-mark-two-headphones", "XX99 MARK II", 2999),
    new ProductCart(2, 1, "xx99-mark-one-headphones", "XX99 MARK I", 1750),
    new ProductCart(3, 1, "xx59-headphones", "XX59", 899),
    new ProductCart(4, 1, "zx9-speaker", "ZX9", 4500),
  ];

  IncreaseProduct(index: number) {
    if (index !== -1) {
      this.cartList[index].quantity++;
    }
  }

  ReduceProduct(index: number) {
    if (index !== -1) {
      if (this.cartList[index].quantity > 0) {
        this.cartList[index].quantity--;
      }
      if (this.cartList[index].quantity === 0) {
        this.cartList.splice(index, 1);
      }
    }
  }

  RemoveAll() {
    this.cartList.splice(0, this.cartList.length);
  }

  Total() {
    return this.cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}