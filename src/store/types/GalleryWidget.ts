import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface IGalleryWidget extends IWidget {
  data: {
    size: number,
    marginTop: number,
    marginBottom: number,
    marginBetween: number,
    images: Array<string>
  }
}

let counter = -1

export function createDefaultGallery (): IGalleryWidget {
  counter++
  return {
    type: WidgetTypes.GALLERY,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      marginBetween: 20,
      size: 300,
      images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300']
    },
    template: ''
  }
}
