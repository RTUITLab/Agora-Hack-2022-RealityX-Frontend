<template>
  <div class="workspace">
    <HeaderWidget></HeaderWidget>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderWidget from '@/components/Widgets/HeaderWidget.vue'

@Component({
  components: { HeaderWidget }
})
export default class EditorWorkspace extends Vue {

}
</script>

<style scoped>
.workspace {
  min-height: 100vh;
}
</style>
