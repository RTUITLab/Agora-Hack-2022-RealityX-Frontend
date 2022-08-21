<template>
  <footer :id="data.id + '_' + data.number" class="ws-footer" :style="`height: ${data.data.height}px; margin-top: ${data.data.marginTop}px; background: ${data.data.background}`">
    <div class="ws-footer_text" :style="`color: ${data.data.textColor}`">{{data.data.text}}</div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFooterWidget } from '@/store/types/FooterWidget'

@Component({})
export default class FooterWidget extends Vue {
  @Prop()
  public inputData!: IFooterWidget

  public data = {} as IFooterWidget

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style lang="scss" scoped>
.ws-footer {
  display: flex;
  padding: 0 80px;

  .ws-footer_text {
    margin: auto;
    text-align: center;
  }
}
</style>
