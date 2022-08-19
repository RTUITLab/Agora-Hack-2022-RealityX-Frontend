<template>
  <main>
    <sidebar></sidebar>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Editor/Sidebar.vue'

@Component({
  components: { Sidebar }
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
