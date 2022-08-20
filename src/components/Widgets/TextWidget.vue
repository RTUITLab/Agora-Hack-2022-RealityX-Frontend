<template>
  <div style="margin: 0 80px">
    <h3 :style="
    `color: ${data.data.header.color};
    font-size: ${data.data.header.size}px;
    margin: ${data.data.marginTop}px 0 ${data.data.marginBetween}px 0`"
    >{{ data.data.header.text }}</h3>
    <p :style="
    `color: ${data.data.text.color};
    font-size: ${data.data.text.size}px;
    margin: 0 0 ${data.data.marginBottom}px 0`"
    >{{ data.data.text.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITextWidget } from '@/store/types/TextWidget'

@Component({})
export default class TextWidget extends Vue {
  @Prop()
  public inputData!: ITextWidget

  public data = {} as ITextWidget

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style scoped>

</style>
