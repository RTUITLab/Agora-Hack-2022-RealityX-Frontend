import IWidget from '@/store/types/Widget'
import { createDefaultHeader, ILink } from '@/store/types/HeaderWidget'

export interface IProjectSettings {
  title: string
  description: string
  id: string
}

export interface IProjectStyle {
  blockGap: number,
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
      blockGap: 20,
      backgroundColor: '#F6F9FB',
      headerColor: '#F6F9FB',
      footerColor: '#1F223B'
    },
    widgets: [createDefaultHeader()],
    links: []
  }
}