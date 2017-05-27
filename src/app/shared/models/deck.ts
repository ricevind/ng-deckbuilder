import { Card } from './card';

export interface CardCount {
    card: Card;
    count: number;
}

export interface Deck {
    name: string;
    cards: CardCount[];
}
