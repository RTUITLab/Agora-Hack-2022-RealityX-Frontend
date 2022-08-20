<template>
  <div :id="data.id + '_' + data.number" class="ws-header" :style="`height: ${data.data.height}px; margin-bottom: ${data.data.marginBottom}px`">
    <div class="ws-header_logo-wrapper">
      <img v-if="data.data.logoUrl" :height="`${data.data.height - 40 * 2}px`" :src="data.data.logoUrl" alt="Site logo">
    </div>
    <ul class="ws-header_links" style="padding: 0; margin: 0">
      <li v-for="link in data.data.links" :key="link.name" style="list-style: none; display: inline-block; margin-left: 32px">
        <a :href="link.url" :style="`text-decoration: none; font-size: 18px; color: ${data.data.linksColor}`">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IHeaderWidget } from '@/store/types/HeaderWidget'
import { WidgetTypes } from '@/store/types/Widget'

@Component({})
export default class HeaderWidget extends Vue {
  @Prop()
  public data?: IHeaderWidget

  public mounted () {
    if (!this.data) {
      this.data = {
        type: WidgetTypes.HEADER,
        number: 0,
        id: 'header',
        data: {
          height: 120,
          marginBottom: 0,
          links: [],
          linksColor: '#505050',
          logoUrl: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ws-header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 40px 80px;
  box-sizing: border-box;

  .ws-header_logo-wrapper {
    margin-right: auto;
  }
}
</style>
