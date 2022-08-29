import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, ProductListModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
