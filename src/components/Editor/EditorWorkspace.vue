<template>
  <div class="workspace">
    <header-widget :input-data="data[0]"></header-widget>
    <footer-widget :input-data="data[1]"></footer-widget>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'
import IWidget from '@/store/types/Widget'
import FooterWidget from '@/components/Widgets/FooterWidget.vue'

@Component({
  components: { FooterWidget, HeaderWidget }
})
export default class EditorWorkspace extends Vue {
  @Prop()
  public inputData?: Array<IWidget>

  public data = [] as Array<IWidget>

  public created () {
    this.data = this.inputData || []

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style scoped>
.workspace {
  min-height: 100vh;
}
</style>
