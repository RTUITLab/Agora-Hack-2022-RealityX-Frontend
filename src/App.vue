<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "assets/fonts/inter/inter.css";
* {
  font-family: 'Inter', sans-serif;
  color: #19171D;
}

html {
  height: 100vh;
  padding: 0;
  margin: 0;

  overflow-x: hidden;
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

  transition: .1s;

  &.blue-btn {
    background-color: #3870FF;
    color: white;

    &:active {
      background-color: #759bff;
    }
  }

  &.white-btn {
    background-color: #FFFFFF;
    color: #718096;
    border: 1px solid #71809633;

    &:active {
      background-color: #e3e1e1;
    }
  }

  &.link {
    margin-left: 16px;
    padding: 0;
    width: max-content;

    color: #3870FF;
    background: none;
  }
}

.row {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 16px;
}
</style>
