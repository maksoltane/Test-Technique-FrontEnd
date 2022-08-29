import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'matchesCategory',
})
export class MatchesCategoryPipe implements PipeTransform {
  transform(items: Product[], category: string): Product[] {
    return items.filter((item) => item.category_id === category);
  }
}
