import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../shared/models/card';

@Pipe({
  name: 'cardRarity'
})
export class CardRarityPipe implements PipeTransform {
  transform(value: Card[], rarity: string): Card[] {
    return value.filter((card: Card) => {
      return card.rarity.toLowerCase().indexOf(rarity.toLowerCase()) !== -1;
    });
  }
}