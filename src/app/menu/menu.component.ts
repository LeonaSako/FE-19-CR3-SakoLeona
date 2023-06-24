import { Component } from '@angular/core';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  dishes:Idishes[]=dishes;
  constructor(private route: ActivatedRoute,
    private orderService: OrderService
    ){}


    addToCart(i: number) {
      window.alert('Your product has been added to the cart!');
      this.orderService.addToCart(this.dishes[i]);
  }



}