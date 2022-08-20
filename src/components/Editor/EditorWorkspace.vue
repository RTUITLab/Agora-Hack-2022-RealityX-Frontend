<template>
  <div class="workspace">
    <HeaderWidget :data="data[0]"></HeaderWidget>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'
import IWidget from '@/store/types/Widget'

@Component({
  components: { HeaderWidget }
})
export default class EditorWorkspace extends Vue {
  @Prop()
  public inputData?: Array<IWidget>

  public data = [] as Array<IWidget>

  public created () {
    this.data = this.inputData || []

    if (!this.data.length) {
      this.data = [{} as IWidget, {} as IWidget]
    }
  }
}
</script>

<style scoped>
.workspace {
  min-height: 100vh;
}
</style>
