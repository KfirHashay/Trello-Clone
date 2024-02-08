import { Card, List } from '@prisma/client';

export type ListWithCards = List & { cards: Card[] };

export type CardsWithList = Card & { list: List };
