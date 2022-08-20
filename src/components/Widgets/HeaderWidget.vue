<template>
  <div :id="data.id + '_' + data.number" class="ws-header" :style="`height: ${data.data.height}px; margin-bottom: ${data.data.marginBottom}px`">
    <div class="ws-header_logo-wrapper">
      <img v-if="data.data.logoUrl" :height="`${data.data.height - 40 * 2}px`" :src="data.data.logoUrl" alt="Site logo">
    </div>
    <ul class="ws-header_links" style="padding: 0; margin: 0">
      <li v-for="link in data.data.links" :key="link.name" class="ws-header_link">
        <a :href="link.url" :style="`text-decoration: none; font-size: 18px; color: ${data.data.linksColor}`">{{link.name}}</a>
      </li>
    </ul>
  </div>
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

  public genTemplate () {
    const style = `
    <style>
    .ws-header {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 40px 80px;
      box-sizing: border-box;
    }
    @media (max-width: 678px) {
      .ws-header {
        flex-direction: column;
        gap: 16px;
        height: auto !important;
      }

      .ws-header_link {
        display: block;
        margin: 8px auto;
      }

      .ws-header_logo-wrapper {
        margin: auto;
      }
    }
    </style>
    `
    return style + `<div id="${this.data!.id} + '_' + ${this.data!.number}" class="ws-header" style="height: ${this.data!.data.height}px; margin-bottom: ${this.data!.data.marginBottom}px">
    <div style="margin-right: auto;">
      ${this.data!.data.logoUrl ? `<img v-if="data.data.logoUrl" height="${this.data!.data.height - 40 * 2}px" src="${this.data!.data.logoUrl}" alt="Site logo">` : ''}
    </div>
    <ul class="ws-header_links" style="padding: 0; margin: 0">
      ${this.data!.data.links.map((link) =>
        `<li style="list-style: none; display: inline-block; margin-left: 32px">
        <a href="${link.url}" style="text-decoration: none; font-size: 18px; color: ${this.data!.data.linksColor}">${link.name}</a>
      </li>`
    ).join('')}
    </ul>
  </div>`
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
