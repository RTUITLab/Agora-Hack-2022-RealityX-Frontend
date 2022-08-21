<template>
  <div>
    <sequence-controller
      :edit="true"
      style="position: absolute; right: 96px; margin-top: -16px; z-index: 4"
      @add="$emit('edit')"
      @up="$emit('up')"
      @down="$emit('down')"
      @remove="$emit('remove')"
    ></sequence-controller>
    <component :is="component" :input-data="inputData"></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import IWidget from '@/store/types/Widget'
import SequenceController from '@/components/Forms/SequenceController.vue'

@Component({
  components: { SequenceController }
})
export default class WidgetWrapper extends Vue {
  @Prop({
    required: true
  })
  component!: Vue

  @Prop()
  inputData!: IWidget
}
</script>

<style lang="scss" scoped>

</style>
