import IWidget, { WidgetTypes } from '@/store/types/Widget'

export interface ILink {
  url: string,
  name: string
}

export interface IHeaderWidget extends IWidget {
  data: {
    height: number,
    marginBottom: number,
    logoUrl: string,
    linksColor: string,
    links: Array<ILink>,
    background: string
  }
}

let counter = -1

export function createDefaultHeader (): IHeaderWidget {
  counter++
  return {
    type: WidgetTypes.HEADER,
    number: counter,
    id: 'header',
    data: {
      height: 120,
      marginBottom: 0,
      links: [
        {
          url: 'sdfsd',
          name: 'Yandex'
        },
        {
          name: 'Google',
          url: 'sdfsdf'
        }
      ],
      linksColor: '#505050',
      logoUrl: '',
      background: '#FFFFFF'
    },
    template: ''
  }
}
