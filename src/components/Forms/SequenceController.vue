<template>
  <div class="sc-container">
    <img src="../../assets/Upload.svg" @click="$emit('add')">
    <img src="../../assets/Arrow_up.svg" @click="$emit('up')">
    <img src="../../assets/Arrow_down.svg" @click="$emit('down')">
    <img src="../../assets/Remove.svg" @click="$emit('remove')">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SequenceController extends Vue {
}
</script>

<style lang="scss" scoped>
.sc-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  background: #19171D;
  border-radius: 5px;

  img {
    margin: 10px 0;
    padding: 0 10px;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid #FFFFFF0D;
    }
  }
}
</style>
