<template>
  <div class="structure-item">
    <img :src="icon">
    <p>{{title}}</p>
    <button class="link" @click="showModal = true">Изменить</button>
    <component :is="component" v-if="showModal" @close="showModal = false" :input-data="data"></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import IWidget, { WidgetTypes } from '@/store/types/Widget'
import HeaderModal from '@/components/Modals/HeaderModal.vue'
import FooterModal from '@/components/Modals/FooterModal.vue'
import TextModal from '@/components/Modals/TextModal.vue'
import ImageModal from '@/components/Modals/ImageModal.vue'
import GalleryModal from '@/components/Modals/GalleryModal.vue'
import CardsModal from '@/components/Modals/CardsModal.vue'

@Component({
  components: { TextModal, ImageModal, GalleryModal, CardsModal, FooterModal, HeaderModal }
})
export default class StructureItem extends Vue {
  @Prop({
    required: true
  })
  public data!: IWidget

  public showModal = false

  get title (): string {
    return this.data.type + ' ' + this.data.number
  }

  get icon (): string {
    switch (this.data.type) {
      case WidgetTypes.HEADER:
        return '/header.svg'
      case WidgetTypes.FOOTER:
        return '/footer.svg'
      default:
        return '/widget.svg'
    }
  }

  get component () {
    switch (this.data.type) {
      case WidgetTypes.HEADER:
        return HeaderModal
      case WidgetTypes.FOOTER:
        return FooterModal
      case WidgetTypes.TEXT:
        return TextModal
      case WidgetTypes.IMAGE:
        return ImageModal
      case WidgetTypes.GALLERY:
        return GalleryModal
      case WidgetTypes.CARDS:
        return CardsModal
      default:
        return 'br'
    }
  }
}
</script>

<style lang="scss" scoped>
.structure-item {
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 4px auto 4px 8px;
  }
}
</style>
