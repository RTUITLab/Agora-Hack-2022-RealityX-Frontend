<template>
  <div :style="`display: flex; margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px`">
    <img :src="data.data.imageUrl" :style="`margin: auto; max-width:${data.data.width}px; max-height:${data.data.height}px; width: 100%`">
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
