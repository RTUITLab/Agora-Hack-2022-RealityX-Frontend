<template>
  <main>
    <sidebar></sidebar>
    <div style="padding-left: 360px">
      <editor-header></editor-header>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Editor/Sidebar.vue'
import EditorHeader from '@/components/Editor/EditorHeader.vue'

@Component({
  components: {
    Sidebar, EditorHeader
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
