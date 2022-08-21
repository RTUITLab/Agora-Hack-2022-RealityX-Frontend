<template>
  <main>
    <div style="padding-left: 360px">
      <editor-header :title="project.settings.title"></editor-header>
      <editor-workspace
        :input-data="project.widgets"
        :style="`background: ${project.style.backgroundColor}; gap: ${project.style.blockGap}px`"
      ></editor-workspace>
    </div>
    <sidebar :input-data="project"></sidebar>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Editor/Sidebar.vue'
import EditorHeader from '@/components/Editor/EditorHeader.vue'
import EditorWorkspace from '@/components/Editor/EditorWorkspace.vue'
import { createProject, generatePage, IProject } from '@/store/types/Project'
import IWidget, { staticForPage, WidgetTypes } from '@/store/types/Widget'
import { createDefaultText, staticTextTemplate, textToTemplate } from '@/store/types/TextWidget'
import { createDefaultImage, imageToTemplate, staticImageTemplate } from '@/store/types/ImageWidget'
import { createDefaultGallery, galleryToTemplate, staticGalleryTemplate } from '@/store/types/GalleryWidget'
import { cardsToTemplate, createDefaultCards, staticCardsTemplate } from '@/store/types/CardsWidget'
import { createDefaultSlider, sliderToTemplate, staticSliderTemplate } from '@/store/types/SliderWidget'
import { headerToTemplate, staticHeaderTemplate } from '@/store/types/HeaderWidget'
import { footerToTemplate, staticFooterTemplate } from '@/store/types/FooterWidget'

@Component({
  components: {
    EditorWorkspace,
    Sidebar,
    EditorHeader
  }
})
export default class EditorView extends Vue {
  project: IProject = {} as IProject

  public created () {
    this.project = createProject('', '', 'example')

    this.$root.$on('update', (e: IWidget) => {
      const index = this.project.widgets.findIndex(value => value.id === e.id)
      this.project.widgets.splice(index, 1, e)
      this.update()
    })

    this.$root.$on('update-settings', (e: IProject) => {
      this.project.widgets[0].data.background = e.style.headerColor
      this.project.widgets[this.project.widgets.length - 1].data.background = e.style.footerColor
      this.update()
    })

    this.$root.$on('update-all', (e: Array<IWidget>) => {
      this.project.widgets = e
      this.update()
    })

    this.$root.$on('add', (e: WidgetTypes) => {
      switch (e) {
        case WidgetTypes.TEXT:
          this.project.widgets.splice(this.project.widgets.length - 1, 0, createDefaultText())
          break
        case WidgetTypes.IMAGE:
          this.project.widgets.splice(this.project.widgets.length - 1, 0, createDefaultImage())
          break
        case WidgetTypes.GALLERY:
          this.project.widgets.splice(this.project.widgets.length - 1, 0, createDefaultGallery())
          break
        case WidgetTypes.CARDS:
          this.project.widgets.splice(this.project.widgets.length - 1, 0, createDefaultCards())
          break
        case WidgetTypes.SLIDER:
          this.project.widgets.splice(this.project.widgets.length - 1, 0, createDefaultSlider())
          break
      }

      this.update()
    })

    this.$root.$on('build', () => {
      const staticContent = staticForPage() +
        staticHeaderTemplate() +
        staticFooterTemplate() +
        staticTextTemplate() +
        staticImageTemplate() +
        staticGalleryTemplate() +
        staticCardsTemplate() +
        staticSliderTemplate()

      const body = this.project.widgets.map((widget) => {
        switch (widget.type) {
          case WidgetTypes.HEADER:
            return headerToTemplate(widget)
          case WidgetTypes.FOOTER:
            return footerToTemplate(widget)
          case WidgetTypes.TEXT:
            return textToTemplate(widget)
          case WidgetTypes.IMAGE:
            return imageToTemplate(widget)
          case WidgetTypes.GALLERY:
            return galleryToTemplate(widget)
          case WidgetTypes.CARDS:
            return cardsToTemplate(widget)
          case WidgetTypes.SLIDER:
            return sliderToTemplate(widget)
          default:
            return ''
        }
      }).join('\n')

      console.log(generatePage(staticContent, body, this.project))
    })
  }

  update () {
    this.project = JSON.parse(JSON.stringify(this.project))
    this.$forceUpdate()
  }
}
</script>

<style scoped>

</style>
