<template>
  <div :style="`display: flex; margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px`">
    <img :src="data.data.imageUrl" :width="data.data.width" :height="data.data.height" style="margin: auto">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IImageWidget } from '@/store/types/ImageWidget'

@Component({})
export default class ImageWidget extends Vue {
  @Prop()
  public inputData!: IImageWidget

  public data = {} as IImageWidget

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style scoped>

</style>
