import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface IImageWidget extends IWidget {
  data: {
    height: number,
    width: number
    marginTop: number,
    marginBottom: number,
    imageUrl: string
  }
}

let counter = -1

export function createDefaultImage (): IImageWidget {
  counter++
  return {
    type: WidgetTypes.IMAGE,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      height: 300,
      width: 540,
      imageUrl: 'https://via.placeholder.com/540x300'
    },
    template: ''
  }
}

export function staticImageTemplate (): string {
  return ''
}

export function imageToTemplate (data: IImageWidget): string {
  return `<div style="display: flex; margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px">
    <img src="${data.data.imageUrl}" style="margin: auto; max-width:${data.data.width}px; max-height:${data.data.height}px; width: 100%">
  </div>`
}
