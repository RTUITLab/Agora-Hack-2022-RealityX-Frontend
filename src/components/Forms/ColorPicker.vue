<template>
 <div class="color-picker">
   <input type="text" disabled :value="color">
   <label for="input" :style="`background: ${color}`">
      &nbsp;
   </label>
   <input type="color" id="input" hidden v-model="color" @input="$emit('input', color)">
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ColorPicker extends Vue {
  @Prop({})
  value!: string

  color = '#000000'

  created () {
    this.color = this.value
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  display: flex;
  flex-direction: row;
  align-items: center;

  input[type=text] {
    width: 112px;
    margin: 0 8px 0 0;
  }

  label {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    border: 1px solid #E8E8E8;
  }
}
</style>
