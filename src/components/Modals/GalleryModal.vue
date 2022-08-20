<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Фото галерея</h3>
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
          <label>Отступ между
            <br>
            <input type="text" style="width: 64px" v-model="data.data.marginBetween">
          </label>
        </div>
        <div>
          <label>Размер фото
            <br>
            <input type="text" style="width: 64px" v-model="data.data.size">
          </label>
        </div>
      </div>

      <div v-for="(imageUrl, i) in imageUrls" :key="imageUrl + i">
        <label :ref="imageUrl + i">Изображение {{i + 1}}
          <br>
          <image-skeleton v-if="!imageUrl" height="96"></image-skeleton>
          <img v-else :src="imageUrl" style="width: 100%">
          <input hidden type="file" @change="() => uploadFile(i)">
        </label>
        <sequence-controller
          @add="() => $refs[imageUrl + i][0].click()"
          @up="() => swapItems(i, i - 1)"
          @down="() => swapItems(i, i + 1)"
          @remove="() => removeItem(i)"
        ></sequence-controller>
      </div>

      <button class="black-btn add" @click="() => imageUrls.push('')">Добавить</button>
    </template>

    <template slot="footer">
      <button class="blue-btn" style="width: max-content" @click="saveData">Сохранить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseModal from '@/components/Modals/BaseModal.vue'
import { IGalleryWidget } from '@/store/types/GalleryWidget'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import SequenceController from '@/components/Forms/SequenceController.vue'

@Component({
  components: { SequenceController, ImageSkeleton, BaseModal }
})
export default class GalleryModal extends Vue {
  @Prop({})
  inputData!: IGalleryWidget

  data!: IGalleryWidget
  imageUrls: Array<string> = []

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
    this.imageUrls = this.data.data.images
  }

  saveData () {
    this.data.data.images = this.imageUrls
    this.$root.$emit('update', this.data)
    this.$emit('close')
  }

  uploadFile (index: number) {
    this.imageUrls.splice(index, 1, '/Logo0.svg')
  }

  removeItem (index: number) {
    this.imageUrls.splice(index, 1)
  }

  swapItems (currIndex: number, targetIndex: number) {
    if (targetIndex >= 0 && targetIndex < this.imageUrls.length) {
      const temp = this.imageUrls[currIndex]
      this.imageUrls[currIndex] = this.imageUrls[targetIndex]
      this.imageUrls[targetIndex] = temp

      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  width: max-content;
  padding: 12px 14px;
}
</style>
