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
    links: Array<ILink>,
    background: string
  }
}

let counter = -1

export function createDefaultHeader (): IHeaderWidget {
  counter++
  return {
    type: WidgetTypes.HEADER,
    number: counter,
    id: 'header',
    data: {
      height: 120,
      marginBottom: 0,
      links: [
        {
          url: 'sdfsd',
          name: 'Yandex'
        },
        {
          name: 'Google',
          url: 'sdfsdf'
        }
      ],
      linksColor: '#505050',
      logoUrl: '',
      background: '#F6F9FB'
    },
    template: ''
  }
}

export function staticHeaderTemplate (): string {
  return `
  <style>
  .ws-header {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 40px 80px;
    box-sizing: border-box;
  }

  .ws-header_logo-wrapper {
    margin-right: auto;
  }

  .ws-header_link {
    list-style: none;
    display: inline-block;
    margin-left: 32px;
  }

  @media (max-width: 1042px) {
    .ws-header {
      flex-direction: column;
      gap: 16px;
      height: auto !important;
    }

    .ws-header_logo-wrapper {
      margin: auto;
    }

    .ws-header_link {
      display: block;
      margin: 8px auto;
    }
  }
  </style>
  `
}

export function headerToTemplate (data: IHeaderWidget): string {
  return `<div id="${data.id} + '_' + ${data.number}" class="ws-header" style="height: ${data.data.height}px; margin-bottom: ${data.data.marginBottom}px; background: ${data.data.background}">
    <div class="ws-header_logo-wrapper">
      ${data.data.logoUrl ? `<img height="${data.data.height - 40 * 2}px" src="${data.data.logoUrl}" alt="Site logo">` : ''}
    </div>
    <ul class="ws-header_links" style="padding: 0; margin: 0">
      ${data.data.links.map((link) => `
      <li class="ws-header_link">
        <a href="${link.url}" style="text-decoration: none; font-size: 18px; color: ${data.data.linksColor}">${link.name}</a>
      </li>
      `).join('')}
    </ul>
  </div>`
}
