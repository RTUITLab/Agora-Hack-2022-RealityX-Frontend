import IWidget from '@/store/types/Widget'
import { ILink } from '@/store/types/HeaderWidget'

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
