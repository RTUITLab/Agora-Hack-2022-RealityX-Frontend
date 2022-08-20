import IWidget, { WidgetTypes } from '@/store/types/Widget'

export interface IFooterWidget extends IWidget {
  data: {
    height: number,
    marginTop: number,
    textColor: string,
    text: string
  }
}

let counter = -1

export function createDefaultFooter (): IFooterWidget {
  counter++
  return {
    type: WidgetTypes.FOOTER,
    number: counter,
    id: 'footer',
    data: {
      height: 120,
      marginTop: 0,
      text: 'Собственный подвал',
      textColor: '#505050'
    },
    template: ''
  }
}
