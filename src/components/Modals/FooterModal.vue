<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Подвал</h3>
      <p style="margin: 0; font-size: 14px">Измените параметры футера</p>
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
          <label>Отступ сверху
            <br>
            <input type="text" style="width: 64px" v-model="data.data.marginTop">
          </label>
        </div>
      </div>
      <div class="row">
        <label style="margin: 16px 0">Отступ снизу
          <color-picker style="margin-top: 8px" @input="(e) => data.data.textColor = e" :value="data.data.textColor"></color-picker>
        </label>
      </div>
      <div class="row" style="display: block">
        <div>
          <label>Текст
            <br>
            <input type="text" v-model="data.data.text" style="width: 100%">
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
import { IFooterWidget } from '@/store/types/FooterWidget'
import BaseModal from '@/components/Modals/BaseModal.vue'
import ColorPicker from '@/components/Forms/ColorPicker.vue'

@Component({
  components: { ColorPicker, BaseModal }
})
export default class FooterModal extends Vue {
  @Prop({})
  inputData!: IFooterWidget

  data!: IFooterWidget

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
  }

  saveData () {
    this.$root.$emit('update', this.data)
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped>
label {
  color: #718096;
  font-size: 14px;
}
</style>
