<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Добавить виджет</h3>
      <p style="margin: 0; font-size: 14px">Выберите подходящий виджет из списка</p>
    </template>
    <template slot="body">
      <div class="row" style="gap: 20px; justify-content: center">
        <img src="../../assets/Slider.svg">
        <img src="../../assets/Text_block.svg" @click="addWidget('Text')">
        <img src="../../assets/Image.svg" @click="addWidget('Image')">
      </div>
      <div class="row" style="gap: 20px; justify-content: center">
        <img src="../../assets/Cards.svg">
        <img src="../../assets/Gallery.svg">
        <img src="../../assets/Custom.svg">
      </div>
    </template>
    <template slot="footer">
      <button class="blue-btn" style="width: max-content" @click="addWidget">Добавить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseModal from '@/components/Modals/BaseModal.vue'
import { WidgetTypes } from '@/store/types/Widget'

@Component({
  components: { BaseModal }
})
export default class AddModal extends Vue {
  addWidget (type: WidgetTypes) {
    this.$root.$emit('add', type)
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped>
img {
  cursor: pointer;
}
</style>
