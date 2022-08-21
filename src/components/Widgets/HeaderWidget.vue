<template>
  <header :id="data.id + '_' + data.number" class="ws-header" :style="`height: ${data.data.height}px; margin-bottom: ${data.data.marginBottom}px; background: ${data.data.background}`">
    <div class="ws-header_logo-wrapper">
      <img v-if="data.data.logoUrl" :height="`${data.data.height - 40 * 2}px`" :src="data.data.logoUrl" alt="Site logo">
    </div>
    <ul class="ws-header_links" style="padding: 0; margin: 0">
      <li v-for="link in data.data.links" :key="link.title" class="ws-header_link">
        <a :href="link.url" :style="`text-decoration: none; font-size: 18px; color: ${data.data.linksColor}`">{{link.title}}</a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IHeaderWidget } from '@/store/types/HeaderWidget'

@Component({})
export default class HeaderWidget extends Vue {
  @Prop()
  public inputData!: IHeaderWidget

  public data = {} as IHeaderWidget

  public created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
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

.ws-header_link {
  list-style: none;
  display: inline-block;
  margin-left: 32px;
}

@media (max-width: 1042px) {
  .ws-header {
    flex-direction: column;
    gap: 16px;
    height: auto !important;

    .ws-header_logo-wrapper {
      margin: auto;
    }
  }

  .ws-header_link {
    display: block;
    margin: 8px auto;
  }
}
</style>
