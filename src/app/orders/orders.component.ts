import { OrdersService } from './../shared/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit(){};

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

}
