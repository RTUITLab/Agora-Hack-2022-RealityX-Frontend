<template>
  <aside>
    <img src="../../assets/Logo0.svg" alt="Логотип сайта">
    <section>
      <label for="settings"><span class="dot green"></span>Настройки</label>
      <input type="checkbox" id="settings">
      <ul>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
      </ul>
    </section>
    <section>
      <label for="styling"><span class="dot blue"></span>Стилизация</label>
      <input type="checkbox" id="styling">
      <ul>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
      </ul>
    </section>
    <section>
      <label for="structure"><span class="dot purple"></span>Структура сайта</label>
      <input type="checkbox" id="structure">
      <ul>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
      </ul>
    </section>
    <section>
      <label for="scripts"><span class="dot red"></span>Сторонние скрипты</label>
      <input type="checkbox" id="scripts">
      <ul>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
        <li>sdasd</li>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'sidebar'
})
export default class Sidebar extends Vue {}
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
  width: 360px;
  height: 100vh;
  padding: 28px;

  position: fixed;
  overflow-y: auto;

  border-right: 1px solid #E2E8F0;
  box-sizing: border-box;

  img {
    width: 172px;
    margin-bottom: 28px;
  }

  .dot {
    height: 10px;
    width: 10px;
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
    margin: 8px 5px;
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
