<template>
  <base-modal @close="$emit('close')">
    <template slot="header">
      <h3 style="margin: 0">Сторонний скрипт</h3>
      <p style="margin: 0; font-size: 14px">Измените параметры скрипта</p>
    </template>

    <template slot="body">
      <div class="row" style="display: block">
        <div>
          <label>Название
            <br>
            <input type="text" v-model="data.title" style="width: 100%">
          </label>
        </div>
      </div>
      <div class="row" style="display: block">
        <div>
          <label>Код
            <br>
            <textarea rows="5" v-model="data.url" style="width: 100%; resize: none"></textarea>
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
import BaseModal from '@/components/Modals/BaseModal.vue'
import { ILink } from '@/store/types/HeaderWidget'

@Component({
  components: { BaseModal }
})
export default class ScriptsModal extends Vue {
  @Prop({})
  inputData!: ILink

  data!: ILink

  public created () {
    this.data = JSON.parse(JSON.stringify(this.inputData))
  }

  saveData () {
    console.log(this.data)
    this.$root.$emit('update-links', this.data)
    this.$emit('close')
  }
}
</script>

<style scoped>

</style>
