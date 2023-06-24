import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Idishes } from '../Idishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: Idishes[] = [];
  total: number=0;
  total1: number=0;
  total2: number=0;
  total3: number=0;
  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.items = this.orderService.getItems();
    this.total=this.orderService.calculateTotal();
    this.total1=this.orderService.calculateService();
    this.total2=this.orderService.calculateDiscountedTotal();
    this.total3=this.orderService.calculateDiscount();

  }

}
