<template>
  <div class="workspace">
    <header-widget :input-data="data[0]"></header-widget>

    <component :is="componentName(item.type)" v-for="item in data.slice(2)" :key="item.id"></component>

    <button class="add black-btn" @click="showAddModal = true">Добавить блок</button>
    <add-modal v-if="showAddModal" @close="showAddModal = false"></add-modal>

    <footer-widget :input-data="data[1]"></footer-widget>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'
import IWidget, { WidgetTypes } from '@/store/types/Widget'
import FooterWidget from '@/components/Widgets/FooterWidget.vue'
import AddModal from '@/components/Modals/AddModal.vue'
import TextWidget from '@/components/Widgets/TextWidget.vue'

@Component({
  components: { TextWidget, AddModal, FooterWidget, HeaderWidget }
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

  componentName (type: WidgetTypes) {
    switch (type) {
      case WidgetTypes.TEXT:
        return TextWidget.name
    }
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
