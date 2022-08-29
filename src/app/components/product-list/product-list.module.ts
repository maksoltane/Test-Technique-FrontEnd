import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatchesCategoryPipe } from './matches-category.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent, MatchesCategoryPipe],
  exports: [ProductListComponent],
 // providers: [MatchesCategoryPipe],
})
export class ProductListModule {}
