<template>
  <header>
    <h1>Site title</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class EditorHeader extends Vue {

}
</script>

<style lang="scss" scoped>
header {
  padding: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #E2E8F0;

  h1 {
    margin: 0;

    font-size: 20px;
    font-weight: 600;
  }
}
</style>
