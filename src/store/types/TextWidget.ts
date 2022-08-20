import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface ITextWidget extends IWidget {
  data: {
    marginTop: number,
    marginBottom: number,
    marginBetween: number,
    header: {
      text: string,
      size: number,
      color: string
    },
    text: {
      text: string,
      size: number,
      color: string
    }
  }
}

let counter = -1

export function createDefaultText (): ITextWidget {
  counter++
  return {
    type: WidgetTypes.TEXT,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      marginBetween: 0,
      header: {
        text: 'Текстовый виджет',
        size: 28,
        color: '#000000'
      },
      text: {
        text: 'Введите любой текст',
        size: 18,
        color: '#505050'
      }
    },
    template: ''
  }
}
