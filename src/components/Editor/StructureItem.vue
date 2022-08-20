<template>
  <div class="structure-item">
    <img :src="icon">
    <p>{{title}}</p>
    <button>Изменить</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import IWidget, { WidgetTypes } from '@/store/types/Widget'

@Component({})
export default class StructureItem extends Vue {
  @Prop({
    required: true
  })
  public data!: IWidget

  get title (): string {
    return this.data.type + ' ' + this.data.number
  }

  get icon (): string {
    switch (this.data.type) {
      case WidgetTypes.HEADER:
        return '../../assets/Widgets/icons/header.svg'
      case WidgetTypes.FOOTER:
        return '../../assets/Widgets/icons/footer.svg'
      default:
        return '../../assets/Widgets/icons/widget.svg'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
