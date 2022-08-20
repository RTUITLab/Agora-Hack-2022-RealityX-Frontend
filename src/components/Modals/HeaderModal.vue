<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Шапка</h3>
      <p style="margin: 0; font-size: 14px">Измените параметры хэдера</p>
    </template>
    <template slot="body">
      <div class="row">
        <div>
          <label>Высота
            <br>
            <input type="text" style="width: 64px" v-model="data.data.height">
          </label>
        </div>
        <div>
          <label>Отступ снизу
            <br>
            <input type="text" style="width: 64px" v-model="data.data.marginBottom">
          </label>
        </div>
      </div>
      <div>
        <label>Логотип
          <br>
          <image-skeleton v-if="!logoUrl" height="96"></image-skeleton>
          <img v-else src="../../assets/Logo0.svg" style="width: 100%; height: 52px">
          <input hidden type="file" @change="uploadFile">
        </label>
      </div>
      <div class="row">
        <label style="margin: 16px 0">Отступ снизу
          <color-picker style="margin-top: 8px" @input="data.data.linksColor"></color-picker>
        </label>
      </div>
      <div v-if="data.data.links.length">
        <div class="row">
          <div style="width: 50%">
            <label>Ссылка</label>
          </div>
          <div>
            <label>Название</label>
          </div>
        </div>
        <div class="row" v-for="link in links" :key="link.name">
          <div style="width: 50%">
            <input type="text" v-model="link.url">
          </div>
          <div>
            <input type="text" v-model="link.name">
          </div>
        </div>
      </div>
      <button @click="links.push({ url: '', name: ''})" style="width: max-content">Добавить</button>
    </template>
    <template slot="footer">
      <button class="blue-btn" style="width: max-content">Сохранить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseModal from '@/components/Modals/BaseModal.vue'
import { IHeaderWidget, ILink } from '@/store/types/HeaderWidget'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import ColorPicker from '@/components/Forms/ColorPicker.vue'

@Component({
  components: { ColorPicker, ImageSkeleton, BaseModal }
})
export default class HeaderModal extends Vue {
  @Prop({})
  inputData!: IHeaderWidget

  data!: IHeaderWidget
  logoUrl = ''
  links: Array<ILink> = []

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
    this.logoUrl = this.inputData.data.logoUrl
  }

  uploadFile () {
    console.log('asdasd')
    this.logoUrl = 'asd'
  }
}
</script>

<style lang="scss" scoped>
label {
  color: #718096;
  font-size: 14px;
}
</style>
