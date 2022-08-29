import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatchesCategoryPipe } from './matches-category.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProductListComponent, MatchesCategoryPipe],
  exports: [ProductListComponent],
})
export class ProductListModule {}
