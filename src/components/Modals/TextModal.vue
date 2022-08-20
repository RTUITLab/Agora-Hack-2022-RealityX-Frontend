<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Текстовый блок</h3>
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
      <div class="row" style="display: block">
        <div>
          <label>Заголовок
            <br>
            <input type="text" v-model="data.data.header.text" style="width: 100%">
          </label>
        </div>
      </div>
      <div class="row">
        <div style="width: 200px">
          <label>Размер заголовка
            <br>
            <input type="text" style="width: 64px" v-model="data.data.header.size">
          </label>
        </div>
        <div>
          <label style="margin: 16px 0">Цвет заголовка
            <color-picker style="margin-top: 8px" @input="(e) => data.data.header.color = e" :value="data.data.header.color"></color-picker>
          </label>
        </div>
      </div>
      <div class="row" style="display: block">
        <div>
          <label>Текст
            <br>
            <textarea rows="5" v-model="data.data.text.text" style="width: 100%; resize: none"></textarea>
          </label>
        </div>
      </div>
      <div class="row">
        <div style="width: 200px">
          <label>Размер текста
            <br>
            <input type="text" style="width: 64px" v-model="data.data.text.size">
          </label>
        </div>
        <div>
          <label style="margin: 16px 0">Цвет текста
            <color-picker style="margin-top: 8px" @input="(e) => data.data.text.color = e" :value="data.data.text.color"></color-picker>
          </label>
        </div>
      </div>
    </template>

    <template slot="footer">
      <button class="blue-btn" style="width: max-content" @click="saveData">Сохранить</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITextWidget } from '@/store/types/TextWidget'
import BaseModal from '@/components/Modals/BaseModal.vue'
import ColorPicker from '@/components/Forms/ColorPicker.vue'

@Component({
  components: { ColorPicker, BaseModal }
})
export default class TextModal extends Vue {
  @Prop({})
  inputData!: ITextWidget

  data!: ITextWidget

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
  }

  saveData () {
    this.$root.$emit('update', this.data)
    this.$emit('close')
  }
}
</script>

<style scoped>

</style>
