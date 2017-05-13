import { Card } from './card';

interface CardCount {
    card: Card;
    count: number;
}

export interface Deck {
    name: string;
    cards: CardCount[];
}
