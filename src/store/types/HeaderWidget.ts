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
    links: Array<ILink>
  }
}

export function createDefaultHeader (): IHeaderWidget {
  return {
    type: WidgetTypes.HEADER,
    number: 0,
    id: 'header',
    data: {
      height: 120,
      marginBottom: 0,
      links: [
        {
          url: 'sdfsd',
          name: 'sdfsdf'
        },
        {
          name: 'sdfsdf',
          url: 'sdfsdf'
        }
      ],
      linksColor: '#505050',
      logoUrl: ''
    },
    template: ''
  }
}
