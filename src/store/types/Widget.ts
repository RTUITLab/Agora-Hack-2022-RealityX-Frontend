export enum WidgetTypes {
  HEADER = 'Header',
  FOOTER = 'Footer',
  TEXT = 'Text',
  IMAGE = 'Image',
  CARDS = 'Products',
  GALLERY = 'Images',
  SLIDER = 'Slider'
}

export default interface IWidget {
  id: string,
  number: number,
  type: WidgetTypes,
  data: any,
  template: string
}
