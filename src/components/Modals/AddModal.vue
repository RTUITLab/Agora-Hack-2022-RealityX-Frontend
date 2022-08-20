<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Добавить виджет</h3>
      <p style="margin: 0; font-size: 14px">Выберите подходящий виджет из списка</p>
    </template>
    <template slot="body">
      <div class="row" style="gap: 20px; justify-content: center">
        <img src="../../assets/Slider.svg">
        <img src="../../assets/Slider.svg">
        <img src="../../assets/Slider.svg">
      </div>
      <div class="row" style="gap: 20px; justify-content: center">
        <img src="../../assets/Slider.svg">
        <img src="../../assets/Slider.svg">
        <img src="../../assets/Slider.svg">
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

@Component({
  components: { BaseModal }
})
export default class AddModal extends Vue {
  addWidget () {
    return true
  }
}
</script>

<style lang="scss" scoped>

</style>
