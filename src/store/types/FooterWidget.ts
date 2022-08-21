import IWidget, { WidgetTypes } from '@/store/types/Widget'

export interface IFooterWidget extends IWidget {
  data: {
    height: number,
    marginTop: number,
    textColor: string,
    text: string,
    background: string
  }
}

let counter = -1

export function createDefaultFooter (): IFooterWidget {
  counter++
  return {
    type: WidgetTypes.FOOTER,
    number: counter,
    id: 'footer',
    data: {
      height: 120,
      marginTop: 0,
      text: 'Собственный подвал',
      textColor: '#FFFFFFB2',
      background: '#1F223B'
    },
    template: ''
  }
}

export function staticFooterTemplate (): string {
  return `
  <style>
  .ws-footer {
    display: flex;
    padding: 0 80px;
  }

  .ws-footer_text {
    margin: auto;
    text-align: center;
  }
  </style>
  `
}

export function footerToTemplate (data: IFooterWidget): string {
  return `<div style="margin-top: auto">&nbsp;</div><footer id="${data.id} + '_' + ${data.number}" class="ws-footer" style="height: ${data.data.height}px; margin-top: ${data.data.marginTop}px; background: ${data.data.background}">
    <div class="ws-footer_text" style="color: ${data.data.textColor}">${data.data.text}</div>
  </footer>`
}
