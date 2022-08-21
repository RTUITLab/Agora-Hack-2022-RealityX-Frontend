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

export function staticCardsTemplate (): string {
  return `
  <style>
  .ws-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ws-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px 30px;
    list-style: none;

    background: white;
    box-shadow: 0 2px 40px 0 #0000000D;
    border-radius: 8px;

    transition: .2s;
  }

  .ws-card:hover {
    box-shadow: 0 2px 40px 20px #0000000D;
  }

  .ws-cards_link {
    text-decoration: none;
    margin: 10px 0;
    width: 100%;

    font-size: 16px;
  }

  .ws-cards_footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .ws-cards_price-section h4 {
    text-transform: uppercase;
    font-size: 14px;
    color: #718096;
  }

  .ws-cards_price-section p {
    color: #3870FF;
    font-weight: 600;
  }

  .ws-cards_price-section h4, .ws-cards_price-section p {
    margin: 0;
  }

  .ws-cards_footer button {
    padding: 8px;
    width: min-content;
  }
  </style>
  `
}

export function cardsToTemplate (data: ICardsWidget): string {
  return `<ul id="${data.id} + '_' + ${data.number}" class="ws-cards" style="margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px; gap: ${data.data.marginBetween}px">
    ${data.data.cards.map((item) => (`
    <li class="ws-card">
      <img src="${item.imageUrl}" style="height: 110px; width: 160px; object-fit: scale-down">
      <a class="ws-cards_link" href="${item.url}">${item.title}</a>
      <div class="ws-cards_footer">
        <div class="ws-cards_price-section">
          <h4>Цена</h4>
          <p>${Number(item.price).toLocaleString()}&nbsp;₽</p>
        </div>
        <button>
          <img src="${location.origin + '/img/Cart.svg'}">
        </button>
      </div>
    </li>
    `)).join('\n')}
  </ul>`
}
