<template>
  <aside>
    <img src="../../assets/Logo0.svg" alt="Логотип сайта">
    <section>
      <label for="settings"><span class="dot green"></span>Настройки</label>
      <input type="checkbox" id="settings">
      <ul>
        <li>Свойство</li>
        <li>Свойство</li>
        <li>Свойство</li>
      </ul>
    </section>
    <section>
      <label for="styling"><span class="dot blue"></span>Стилизация</label>
      <input type="checkbox" id="styling">
      <ul>
        <li>Свойство</li>
        <li>Свойство</li>
        <li>Свойство</li>
        <li>Свойство</li>
      </ul>
    </section>
    <section>
      <label for="structure"><span class="dot purple"></span>Структура сайта</label>
      <input type="checkbox" id="structure">
      <ul>
        <li v-for="widget in data.widgets" :key="widget.id">
          <structure-item :data="widget"></structure-item>
        </li>
        <li>
          <button
            class="black-btn"
            style="padding: 12px 14px; margin-top: 16px"
            @click="createBlock"
          >Добавить</button>
        </li>
      </ul>
    </section>
    <section>
      <label for="scripts"><span class="dot red"></span>Сторонние скрипты</label>
      <input type="checkbox" id="scripts">
      <ul>
        <li>Свойство</li>
        <li>Свойство</li>
        <li>
          <button class="black-btn" style="padding: 12px 14px; margin-top: 16px">Добавить</button>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StructureItem from '@/components/Editor/StructureItem.vue'
import { IProject } from '@/store/types/Project'

@Component({
  name: 'sidebar',
  components: { StructureItem }
})
export default class Sidebar extends Vue {
  @Prop({
    required: true
  })
  public data!: IProject

  createBlock () {
    document.getElementById('create-block-btn')!.click()
  }
}
</script>

<style lang="scss" scoped>
input[type=checkbox] {
  display: none;

  &:checked+ul {
    position: relative;
    height: 0;
    margin: 0;
    overflow-y: hidden;
  }
}

aside {
  top: 0;
  width: 360px;
  height: 100vh;
  padding: 28px;

  position: fixed;
  overflow-y: auto;

  border-right: 1px solid #E2E8F0;
  box-sizing: border-box;
  z-index: 100;

  img {
    width: 172px;
    margin-bottom: 28px;
  }

  .dot {
    height: 9px;
    width: 9px;
    margin-right: 8px;
    border-radius: 50%;

    &.green {
      background-color: #32C37E;
    }
    &.blue {
      background-color: #10A6E5;
    }
    &.purple {
      background-color: #9F5AE3;
    }
    &.red {
      background-color: #E3735A;
    }
  }

  label {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 8px 4px;
    padding: 0 8px;
    border-left: 1px dashed #718096;

    transition: .5s;

    li {
      margin: 0;
      padding: 0 16px;
      box-sizing: border-box;
    }
  }
}
</style>
