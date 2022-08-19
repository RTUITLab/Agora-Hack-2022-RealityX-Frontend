<template>
  <div class="login-layout">
    <div class="login-form_col">
      <div class="login-form_box" @keydown.enter="login">
        <img alt="Логотип конструктора" src="../assets/Logo0.svg">
        <h2>Авторизация</h2>
        <input v-model="name" type="text" placeholder="Логин">
        <input v-model="pass" type="text" placeholder="Пароль">
        <button type="button" class="blue-btn" style="margin-top: 32px" @click="login">Войти</button>
      </div>
    </div>
    <div class="login-form_back">
      <div class="login-form_wrapper">
        <img src="../assets/Example.png" alt="Интерфейс системы">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class LoginView extends Vue {
  name = ''
  pass = ''

  public login () {
    if (this.name === 'qwerty') {
      sessionStorage.setItem('user', this.name)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-layout {
  display: flex;
  flex-direction: row;
  height: 100%;

  .login-form_col {
    min-width: 540px;
    width: 66%;

    align-self: center;

    .login-form_box {
      max-width: 360px;
      margin: auto;

      img {
        width: 70%;
      }

      h2 {
        margin: 4px 0 24px;
        text-transform: uppercase;
        color: #19171D80;

        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  .login-form_back {
    width: 100%;
    height: 100%;
    background: #3870FF url("../assets/circles.svg") no-repeat bottom;

    .login-form_wrapper {
      display: flex;
      height: 100%;

      img {
        height: 80vh;
        margin: auto 0 auto auto;
        //position: relative;

        //right: 0;

      }
    }
  }
}
</style>
