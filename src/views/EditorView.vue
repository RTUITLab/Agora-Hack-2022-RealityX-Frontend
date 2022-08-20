<template>
  <main>
    <sidebar :data="project"></sidebar>
    <div style="padding-left: 360px">
      <editor-header></editor-header>
      <editor-workspace :input-data="project.widgets"></editor-workspace>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Editor/Sidebar.vue'
import EditorHeader from '@/components/Editor/EditorHeader.vue'
import EditorWorkspace from '@/components/Editor/EditorWorkspace.vue'
import { createProject, IProject } from '@/store/types/Project'
import IWidget, { WidgetTypes } from '@/store/types/Widget'
import { createDefaultText } from '@/store/types/TextWidget'
import { createDefaultImage } from '@/store/types/ImageWidget'
import { createDefaultGallery } from '@/store/types/GalleryWidget'

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
      this.project = JSON.parse(JSON.stringify(this.project))
      this.$forceUpdate()
    })

    this.$root.$on('add', (e: WidgetTypes) => {
      switch (e) {
        case WidgetTypes.TEXT:
          this.project.widgets.push(createDefaultText())
          break
        case WidgetTypes.IMAGE:
          this.project.widgets.push(createDefaultImage())
          break
        case WidgetTypes.GALLERY:
          this.project.widgets.push(createDefaultGallery())
          break
      }

      this.project = JSON.parse(JSON.stringify(this.project))
      this.$forceUpdate()
    })
  }
}
</script>

<style scoped>

</style>
