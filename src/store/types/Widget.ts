export enum WidgetTypes {
  HEADER,
  FOOTER,
  TEXT,
  IMAGE,
  CARDS,
  GALLERY,
  SLIDER
}

export default interface IWidget {
  id: string,
  number: number,
  type: WidgetTypes,
  data: any
}
