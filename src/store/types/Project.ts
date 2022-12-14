import IWidget from '@/store/types/Widget'
import { createDefaultHeader, ILink } from '@/store/types/HeaderWidget'
import { createDefaultFooter } from '@/store/types/FooterWidget'

export interface IProjectSettings {
  title: string
  description: string
  id: string
}

export interface IProjectStyle {
  font: string
  blockGap: string,
  backgroundColor: string,
  headerColor: string,
  footerColor: string,
}

export interface IProject {
  settings: IProjectSettings,
  style: IProjectStyle
  widgets: Array<IWidget>
  links: Array<ILink>
}

export function createProject (title: string, description: string, id: string): IProject {
  return {
    settings: {
      id: id,
      title: title,
      description: description
    },
    style: {
      font: "'Segoe UI'",
      blockGap: '20',
      backgroundColor: '#F6F9FB',
      headerColor: '#F6F9FB',
      footerColor: '#1F223B'
    },
    widgets: [createDefaultHeader(), createDefaultFooter()],
    links: []
  }
}

export function generatePage (statics: string, content: string, project: IProject): string {
  const scripts = project.links.map((link) => (link.url)).join('\n')
  return `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>${project.settings.title}</title>
    <meta name="description" content="${project.settings.description}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${statics}
    ${scripts}
  </head>
  <body>
    <div id="app" style="gap: ${project.style.blockGap}px">
      ${content}
    </div>
  </body>
  </html>
  `
}
