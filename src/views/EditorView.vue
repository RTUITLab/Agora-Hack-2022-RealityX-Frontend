<template>
  <main>
    <sidebar :data="project"></sidebar>
    <div style="padding-left: 360px">
      <editor-header></editor-header>
      <editor-workspace></editor-workspace>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Editor/Sidebar.vue'
import EditorHeader from '@/components/Editor/EditorHeader.vue'
import EditorWorkspace from '@/components/Editor/EditorWorkspace.vue'
import { createProject, IProject } from '@/store/types/Project'

@Component({
  components: {
    EditorWorkspace,
    Sidebar,
    EditorHeader
  }
})
export default class EditorView extends Vue {
  project!: IProject

  public created () {
    this.project = createProject('', '', 'example')
  }
}
</script>

<style scoped>

</style>
