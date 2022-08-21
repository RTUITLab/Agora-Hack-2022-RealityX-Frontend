<template>
  <aside>
    <img src="../../assets/Logo0.svg" alt="Логотип сайта">
    <section>
      <label for="settings"><span class="dot green"></span>Настройки</label>
      <input type="checkbox" id="settings">
      <ul>
        <li class="input">
          <label>Название
            <br>
            <input type="text" v-model="data.settings.title" @change="(e) => saveSettings('', e)">
          </label>
        </li>
        <li class="input">
          <label>Описание
            <br>
            <textarea v-model="data.settings.description" @change="(e) => saveSettings('', e)"></textarea>
          </label>
        </li>
        <li class="input">
          <label>Идентификатор
            <br>
            <input type="text" v-model="data.settings.id" @change="(e) => saveSettings('', e)">
          </label>
        </li>
      </ul>
    </section>
    <section>
      <label for="styling"><span class="dot blue"></span>Стилизация</label>
      <input type="checkbox" id="styling">
      <ul>
        <li class="input">
          <label>Шрифт
            <br>
            <input type="text" v-model="data.style.font" @change="(e) => saveSettings('', e)">
          </label>
        </li>
        <li class="input">
          <label>Отступ между блоками
            <br>
            <input type="text" v-model="data.style.blockGap" @change="(e) => saveSettings('', e)">
          </label>
        </li>
        <li class="input">
          <label>Цвет фона
            <br>
            <color-picker :value="data.style.backgroundColor" :small="true" @input="(e) => saveSettings('bgc', e)"></color-picker>
          </label>
        </li>
        <li class="input">
          <label>Цвет шапки
            <br>
            <color-picker :value="data.style.headerColor" :small="true" @input="(e) => saveSettings('hdc', e)"></color-picker>
          </label>
        </li>
        <li class="input">
          <label>Цвет подвала
            <br>
            <color-picker :value="data.style.footerColor" :small="true" @input="(e) => saveSettings('ftc', e)"></color-picker>
          </label>
        </li>
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
        <li v-for="link in data.links" :key="link.id">
          <links-item :data="link"></links-item>
        </li>
        <li>
          <button class="black-btn" style="padding: 12px 14px; margin-top: 16px" @click="createLink">Добавить</button>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StructureItem from '@/components/Editor/StructureItem.vue'
import { IProject } from '@/store/types/Project'
import ColorPicker from '@/components/Forms/ColorPicker.vue'
import LinksItem from '@/components/Editor/LinksItem.vue'
import ScriptsModal from '@/components/Modals/ScriptsModal.vue'
import { makeId } from '@/store/types/Widget'

@Component({
  name: 'sidebar',
  components: { ScriptsModal, LinksItem, ColorPicker, StructureItem }
})
export default class Sidebar extends Vue {
  @Prop({
    required: true
  })
  public inputData!: IProject

  public data!: IProject

  public scriptModalShow = false

  created () {
    this.data = this.inputData

    this.$watch('inputData', (newData) => (this.data = newData))
  }

  saveSettings (field: string, e: any) {
    switch (field) {
      case 'bgc':
        this.data.style.backgroundColor = e
        break
      case 'hdc':
        this.data.style.headerColor = e
        break
      case 'ftc':
        this.data.style.footerColor = e
        break
      case 'bkg':
        this.data.style.blockGap = e.data
        break
      case 'ttl':
        this.data.settings.title = e.data
        break
      case 'id':
        this.data.settings.id = e.data
        break
      case 'dsc':
        this.data.settings.description = e.data
        break
    }
    this.$root.$emit('update-settings', this.data)
  }

  createBlock () {
    document.getElementById('create-block-btn')!.click()
  }

  createLink () {
    this.data.links.push({ title: 'Код', url: '', id: makeId(10) })
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

  section > label {
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

      &.input {
        margin-bottom: 16px;

        label {
          color: #718096;
          font-size: 14px;

          br {
            content: " ";
            display: block;
            margin-bottom: 0;
          }

          input {
            padding: 8px 12px;
          }
        }
      }
    }
  }
}
</style>
