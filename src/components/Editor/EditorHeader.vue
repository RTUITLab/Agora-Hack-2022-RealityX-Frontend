<template>
  <header>
    <h1>{{title}}</h1>
    <button class="publish blue-btn" @click="$root.$emit('build')">Опубликовать <img src="../../assets/Check.svg"></button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class EditorHeader extends Vue {
  @Prop({
    default: ''
  })
  title!: string
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 40px;

  box-sizing: border-box;
  border-bottom: 1px solid #E2E8F0;

  h1 {
    margin: 0 auto 0 0;

    font-size: 20px;
    font-weight: 600;
  }

  .publish {
    width: max-content;
    padding: 12px 14px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
}
</style>
