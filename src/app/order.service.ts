import { Injectable } from '@angular/core';
import { Idishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: Idishes[] = [];

  constructor() { }
  addToCart(dishes: Idishes) {
    this.items.push(dishes);
  }
  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  /*totalSum = 0;

  sumPrices() {
    this.totalSum = this.items.reduce((sum, item) => sum + item.price, 0);

    return this.totalSum 
  }
}*/

calculateTotal(){
  let total : number=0;

  for(let val of this.items){
    total=total+ val.price;
  }

  return total;
}



calculateService(): number {
  let total1: number=0
  return this.calculateTotal() * 0.1;
}



calculateDiscountedTotal(): number {
  let total2 = this.calculateTotal()+ this.calculateService();
  if (total2 > 40) {
    return total2 * 0.85; // Apply 15% discount
  }
  return total2;
}

calculateDiscount(): number {
  let total3= this.calculateDiscountedTotal();

if (total3>40){
  return (total3/100)*15;

}
return(0);

}}
