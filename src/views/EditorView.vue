<template>
  <div>sdf</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class EditorView extends Vue {
  projectName = ''

  public mounted () {
    this.projectName = this.$route.params.name!

    console.log(this.projectName)
  }
}
</script>

<style scoped>

</style>
