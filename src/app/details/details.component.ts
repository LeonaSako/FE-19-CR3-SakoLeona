import { Component, OnInit } from '@angular/core';
import { Idishes } from '../Idishes';
import { dishes } from '../dishes';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit{
  details : Idishes={} as Idishes;
  index: number=0;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService
    ){}

  addToCart() {
      window.alert('Your product has been added to the cart!');
      this.orderService.addToCart(this.details);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index= +params['indexFromRouting'];
      this.details = dishes[this.index];
    });
    
  }
}
