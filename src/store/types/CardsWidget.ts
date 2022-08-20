import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface ICard {
  imageUrl: string,
  title: string,
  price: string,
  url: string
}

export function createDefaultCard (): ICard {
  return {
    imageUrl: 'https://via.placeholder.com/245',
    price: '12000',
    url: '/no',
    title: 'Товар'
  }
}

export interface ICardsWidget extends IWidget {
  data: {
    marginTop: number,
    marginBottom: number,
    marginBetween: number,
    cards: Array<ICard>
  }
}

let counter = -1

export function createDefaultCards (): ICardsWidget {
  counter++
  return {
    type: WidgetTypes.CARDS,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      marginBetween: 20,
      cards: [
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard(),
        createDefaultCard()
      ]
    },
    template: ''
  }
}
