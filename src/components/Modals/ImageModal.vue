<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Изображение</h3>
      <p style="margin: 0; font-size: 14px">Измените параметры виджета</p>
    </template>

    <template slot="body">
      <div class="row">
        <div>
          <label>Отступ сверху
            <br>
            <input type="text" style="width: 64px" v-model="data.data.marginTop">
          </label>
        </div>
        <div>
          <label>Отступ снизу
            <br>
            <input type="text" style="width: 64px" v-model="data.data.marginBottom">
          </label>
        </div>
        <div>
          <label>Ширина
            <br>
            <input type="text" style="width: 64px" v-model="data.data.width">
          </label>
        </div>
        <div>
          <label>Высота
            <br>
            <input type="text" style="width: 64px" v-model="data.data.height">
          </label>
        </div>
      </div>
      <div>
        <label ref="imgChange">Изображение
          <br>
          <image-skeleton v-if="!imageUrl" height="96"></image-skeleton>
          <img v-else :src="imageUrl" style="width: 100%">
          <input hidden type="file" @change="uploadFile">

          <button style="width: min-content; padding: 12px 14px" class="black-btn add" @click="() => $refs.imgChange.click()">Добавить</button>
        </label>
      </div>
    </template>

    <template slot="footer">
      <button class="blue-btn" style="width: max-content" @click="saveData">Сохранить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseModal from '@/components/Modals/BaseModal.vue'
import { IImageWidget } from '@/store/types/ImageWidget'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import { UPLOAD_FILE } from '@/store'

@Component({
  components: { ImageSkeleton, BaseModal }
})
export default class ImageModal extends Vue {
  @Prop({})
  inputData!: IImageWidget

  data!: IImageWidget
  imageUrl = ''

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
    this.imageUrl = this.data.data.imageUrl
  }

  saveData () {
    this.data.data.imageUrl = this.imageUrl
    this.$root.$emit('update', this.data)
    this.$emit('close')
  }

  async uploadFile (e: any) {
    const file = e.target.files[0] as File

    this.imageUrl = (await this.$store.dispatch(UPLOAD_FILE, file)) || '/Logo0.svg'
  }
}
</script>

<style lang="scss" scoped>
label {
  color: #718096;
  font-size: 14px;
}
</style>
