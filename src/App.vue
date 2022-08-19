<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "assets/fonts/inter/inter.css";
html {
  height: 100vh;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Inter', sans-serif;
}

input[type=text] {
  width: 100%;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #19171D1A;
  border-radius: 12px;
  box-sizing: border-box;

  color: #19171D;
  font-size: 16px;
  font-family: 'Inter', sans-serif;

  outline: none;

  transition: 0.1s;

  &:focus {
    border-color: #a7b7ff8a;
  }
}

button {
  width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  padding: 16px;
  box-sizing: border-box;

  cursor: pointer;

  &.blue-btn {
    background-color: #3870FF;
    color: white;

    &:active {
      background-color: #759bff;
    }
  }
}
</style>
