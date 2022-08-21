<template>
  <div class="links-item">
    <img src="/Code.svg">
    <p>{{ title }}</p>
    <button class="link" @click="showModal = true" :id="'change_' + data.id">Изменить</button>
    <scripts-modal v-if="showModal" @close="showModal = false" :input-data="data"></scripts-modal>
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
import SliderModal from '@/components/Modals/SliderModal.vue'
import ScriptsModal from '@/components/Modals/ScriptsModal.vue'
import { ILink } from '@/store/types/HeaderWidget'

@Component({
  components: { ScriptsModal, TextModal, ImageModal, GalleryModal, CardsModal, SliderModal, FooterModal, HeaderModal }
})
export default class StructureItem extends Vue {
  @Prop({
    required: true
  })
  public data!: ILink

  public showModal = false

  get title (): string {
    return this.data.title
  }
}
</script>

<style lang="scss" scoped>
.links-item {
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 4px auto 4px 8px;
  }
}
</style>
