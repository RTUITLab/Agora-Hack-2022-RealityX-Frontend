<template>
  <div :style="`width: 100%; height: ${height}px`">&nbsp;</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ImageSkeleton extends Vue {
  @Prop({
    default: 32
  })
  public height!: number
}
</script>

<style scoped>
div {
  margin-top: 8px;
  background: #F2F4FA;
}
</style>
