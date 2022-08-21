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

export function staticGalleryTemplate (): string {
  return `
  <style>
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  </style>
  `
}

export function galleryToTemplate (data: IGalleryWidget): string {
  return `<div id="${data.id} + '_' + ${data.number}" class="gallery" style="margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px; gap: ${data.data.marginBetween}px">
    ${data.data.images.map((image) => (`
      <img src="${image}" style="aspect-ratio: 1; max-width: ${data.data.size}px; width: 100%">
    `)).join('\n')}
  </div>`
}
