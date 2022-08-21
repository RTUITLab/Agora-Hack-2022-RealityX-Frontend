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

export function staticTextTemplate (): string {
  return ''
}

export function textToTemplate (data: ITextWidget): string {
  return `<div style="margin: 0 80px">
    <h3 style="color: ${data.data.header.color}; font-size: ${data.data.header.size}px; margin: ${data.data.marginTop}px 0 ${data.data.marginBetween}px 0"
    >${data.data.header.text}</h3>
    <p style="color: ${data.data.text.color}; font-size: ${data.data.text.size}px; margin: 0 0 ${data.data.marginBottom}px 0"
    >${data.data.text.text}</p>
  </div>`
}
