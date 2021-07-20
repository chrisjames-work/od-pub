<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./css/fonts";
* {
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}
body,
textarea {
  font-family: "Noto IKEA", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
  background: black;
  overflow: hidden;
}
canvas {
  vertical-align: top;
}
.bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: left;
  padding-right: 25px;
  padding-bottom: 20px;
}

.top {
  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
  padding-right: 25px;
  padding-top: 20px;
}

h1 {
  font-size: 36px;
  font-weight: normal;
  line-height: 36px;
}

b {
  font-weight: 400;
}

p {
  font-size: 10px;
  font-weight: 300;
  color: #000;
}

.slug {
  color: #0000ff;
}

a {
  color: #000;
  font-weight: 400;
  text-decoration: underline;
}

a:active {
  color: #fff;
  background: #000;
}

textarea {
  width: 100%;
}
</style>
