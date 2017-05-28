import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../shared/models/card';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {
  transform(value: Card[], query: string): Card[] {
    return value.filter((card: Card) => {
      return card.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
}