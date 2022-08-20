<template>
  <main>
    <sidebar></sidebar>
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

@Component({
  components: {
    EditorWorkspace,
    Sidebar,
    EditorHeader
  }
})
export default class EditorView extends Vue {
  projectName = ''

  public mounted () {
    this.projectName = this.$route.params.name!

    console.log(this.projectName)
  }
}
</script>

<style scoped>

</style>
