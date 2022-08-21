<template>
 <div class="color-picker">
   <input type="text" disabled :value="color" :style="`${small ? 'padding: 8px 12px; width: calc(100% - 38px)' : ''}`">
   <label :for="id" :style="`background: ${color}; ${small ? 'height: 38px; width: 38px' : ''}`">
      &nbsp;
   </label>
   <input type="color" :id="id" hidden v-model="color" @input="$emit('input', color)">
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { makeId } from '@/store/types/Widget'

@Component({})
export default class ColorPicker extends Vue {
  @Prop({})
  value!: string

  @Prop({
    default: false
  })
  small!: boolean

  color = '#000000'
  id = makeId(10)

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
  margin-top: 8px;

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
