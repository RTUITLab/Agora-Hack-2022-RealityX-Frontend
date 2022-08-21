<template>
  <div class="workspace">
    <header-widget :input-data="data[0]"></header-widget>

    <widget-wrapper
      :component="componentName(item.type)"
      v-for="(item, i) in data.slice(1, data.length - 1)"
      :key="item.id"
      :input-data="item"
      @edit="() => edit(item.id)"
      @up="() => swapItems(i + 1, i)"
      @down="() => swapItems(i + 1, i + 2)"
    ></widget-wrapper>

    <button class="add black-btn" @click="showAddModal = true">Добавить блок</button>
    <add-modal v-if="showAddModal" @close="showAddModal = false"></add-modal>

    <footer-widget :input-data="data[data.length - 1]"></footer-widget>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'
import IWidget, { WidgetTypes } from '@/store/types/Widget'
import FooterWidget from '@/components/Widgets/FooterWidget.vue'
import AddModal from '@/components/Modals/AddModal.vue'
import TextWidget from '@/components/Widgets/TextWidget.vue'
import ImageWidget from '@/components/Widgets/ImageWidget.vue'
import GalleryWidget from '@/components/Widgets/GalleryWidget.vue'
import CardsWidget from '@/components/Widgets/CardsWidget.vue'
import SliderWidget from '@/components/Widgets/SliderWidget.vue'
import WidgetWrapper from '@/components/WidgetWrapper.vue'

@Component({
  components: { WidgetWrapper, TextWidget, ImageWidget, GalleryWidget, CardsWidget, AddModal, FooterWidget, HeaderWidget }
})
export default class EditorWorkspace extends Vue {
  @Prop()
  public inputData?: Array<IWidget>

  public data = [] as Array<IWidget>
  public showAddModal = false

  public created () {
    this.data = this.inputData || []

    this.$watch('inputData', (newData) => (this.data = newData))
  }

  componentName (type: WidgetTypes) {
    switch (type) {
      case WidgetTypes.TEXT:
        return TextWidget
      case WidgetTypes.IMAGE:
        return ImageWidget
      case WidgetTypes.GALLERY:
        return GalleryWidget
      case WidgetTypes.CARDS:
        return CardsWidget
      case WidgetTypes.SLIDER:
        return SliderWidget
    }
  }

  swapItems (currIndex: number, targetIndex: number) {
    if (targetIndex > 0 && targetIndex < this.data.length - 1) {
      const temp = this.data[currIndex]
      this.data[currIndex] = this.data[targetIndex]
      this.data[targetIndex] = temp

      this.$root.$emit('update-all', this.data)
    }
  }

  edit (id: string) {
    document.getElementById('change_' + id)!.click()
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .add {
    width: max-content;
    margin: auto;
    padding: 12px 14px;
  }
}
</style>
