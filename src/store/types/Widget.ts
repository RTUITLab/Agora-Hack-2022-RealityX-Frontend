export enum WidgetTypes {
  HEADER = 'Header',
  FOOTER = 'Footer',
  TEXT = 'Text',
  IMAGE = 'Image',
  CARDS = 'Products',
  GALLERY = 'Images',
  SLIDER = 'Slider'
}

export function makeId (length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default interface IWidget {
  id: string,
  number: number,
  type: WidgetTypes,
  data: any,
  template: string
}
