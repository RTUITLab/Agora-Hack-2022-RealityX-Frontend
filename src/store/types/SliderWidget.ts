import IWidget, { makeId, WidgetTypes } from '@/store/types/Widget'

export interface ISliderWidget extends IWidget {
  data: {
    marginTop: number,
    marginBottom: number,
    width: number,
    height: number,
    imageUrls: Array<string>
  }
}

let counter = -1

export function createDefaultSlider (): ISliderWidget {
  counter++
  return {
    type: WidgetTypes.SLIDER,
    number: counter,
    id: makeId(10),
    data: {
      marginTop: 0,
      marginBottom: 0,
      width: 540,
      height: 176,
      imageUrls: ['https://via.placeholder.com/540x176?text=1', 'https://via.placeholder.com/540x176?text=2', 'https://via.placeholder.com/540x176?text=3']
    },
    template: ''
  }
}
