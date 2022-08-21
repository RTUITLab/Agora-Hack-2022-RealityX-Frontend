<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Карточки товаров</h3>
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
      </div>
      <div v-for="(card, i) in cards" :key="card.title + i" class="card">
        <div class="row">
          <label :ref="card.title + i" style="width: 45%">Фото
            <br style="margin-bottom: 8px">
            <image-skeleton v-if="!card.imageUrl" height="96"></image-skeleton>
            <img v-else :src="card.imageUrl" style="width: 100%">
            <input hidden type="file" @change="(e) => uploadFile(e, i)">
          </label>
          <div class="card_data">
            <div>
              <label>Название товара
                <br>
                <input type="text" v-model="card.title">
              </label>
            </div>
            <div>
              <label>Цена
                <br>
                <input type="text" v-model="card.price">
              </label>
            </div>
            <div>
              <label>Ссылка на товар
                <br>
                <input type="text" v-model="card.url">
              </label>
            </div>
          </div>
        </div>
        <sequence-controller
          @add="() => $refs[card.title + i][0].click()"
          @up="() => swapItems(i, i - 1)"
          @down="() => swapItems(i, i + 1)"
          @remove="() => removeItem(i)"
        ></sequence-controller>
      </div>

      <button class="black-btn add" @click="addCard">Добавить</button>
    </template>

    <template slot="footer">
      <button class="blue-btn" style="width: max-content" @click="saveData">Сохранить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseModal from '@/components/Modals/BaseModal.vue'
import { createDefaultCard, ICard, ICardsWidget } from '@/store/types/CardsWidget'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import SequenceController from '@/components/Forms/SequenceController.vue'
import { UPLOAD_FILE } from '@/store'

@Component({
  components: { SequenceController, ImageSkeleton, BaseModal }
})
export default class CardsModal extends Vue {
  @Prop({})
  inputData!: ICardsWidget

  data!: ICardsWidget
  cards: Array<ICard> = []

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
    this.cards = this.data.data.cards
  }

  saveData () {
    this.data.data.cards = this.cards
    this.$root.$emit('update', this.data)
    this.$emit('close')
  }

  async uploadFile (e: any, index: number) {
    const file = e.target.files[0] as File
    this.cards[index].imageUrl = (await this.$store.dispatch(UPLOAD_FILE, file)) || '/Logo0.svg'
    this.$forceUpdate()
  }

  removeItem (index: number) {
    this.cards.splice(index, 1)
  }

  swapItems (currIndex: number, targetIndex: number) {
    if (targetIndex >= 0 && targetIndex < this.cards.length) {
      const temp = this.cards[currIndex]
      this.cards[currIndex] = this.cards[targetIndex]
      this.cards[targetIndex] = temp

      this.$forceUpdate()
    }
  }

  addCard () {
    this.cards.push(createDefaultCard())
  }
}
</script>

<style lang="scss" scoped>
.add {
  width: max-content;
  padding: 12px 14px;
}

.card {
  margin-bottom: 16px;

  div {
    margin-bottom: 8px;
  }

  label {
    color: #718096;
    font-size: 14px;

    br {
      content: " ";
      display: block;
      margin-bottom: 0;
    }
  }
}
</style>
