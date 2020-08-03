import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './shared/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
