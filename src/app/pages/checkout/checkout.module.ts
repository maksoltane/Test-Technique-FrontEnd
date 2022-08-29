import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutCartComponent } from 'src/app/components/checkout-cart/checkout-cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CheckoutCartComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CheckoutComponent, CheckoutCartComponent],
})
export class CheckoutModule {}
