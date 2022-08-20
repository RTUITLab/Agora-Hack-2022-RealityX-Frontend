<template>
  <div class="workspace">
    <header-widget :input-data="data[0]"></header-widget>

    <button class="add black-btn" @click="showAddModal = true">Добавить блок</button>
    <add-modal v-if="showAddModal" @close="showAddModal = false"></add-modal>

    <footer-widget :input-data="data[1]"></footer-widget>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'
import IWidget from '@/store/types/Widget'
import FooterWidget from '@/components/Widgets/FooterWidget.vue'
import AddModal from '@/components/Modals/AddModal.vue'

@Component({
  components: { AddModal, FooterWidget, HeaderWidget }
})
export default class EditorWorkspace extends Vue {
  @Prop()
  public inputData?: Array<IWidget>

  public data = [] as Array<IWidget>
  public showAddModal = false

  public created () {
    this.data = this.inputData || []

    this.$watch('inputData', (newData) => (this.data = newData))
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .add {
    width: max-content;
    margin: auto;
    padding: 12px 14px;
  }
}
</style>
