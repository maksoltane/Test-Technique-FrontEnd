import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: Product[], category: string): Product[] {
    console.log('items', items, category);
    return items.filter((item) => item.category_id === category);
  }
}
