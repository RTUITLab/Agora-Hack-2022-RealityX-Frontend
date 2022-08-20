import IWidget from '@/store/types/Widget'

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
