<template>
  <div :id="data.id + '_' + data.number" class="gallery" :style="`margin: ${data.data.marginTop}px 80px ${data.data.marginBottom}px; gap: ${data.data.marginBetween}px`">
    <img v-for="image in data.data.images" :src="image" :key="image" :style="`aspect-ratio: 1; max-width: ${data.data.size}px; width: 100%`">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IGalleryWidget } from '@/store/types/GalleryWidget'

@Component({})
export default class GalleryWidget extends Vue {
  @Prop()
  public inputData!: IGalleryWidget

  public data = {} as IGalleryWidget

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
