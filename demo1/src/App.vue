<template>
  <div id="app">
    <h1>My name is {{ myName }}</h1>
    <h1>Count is {{ count }}</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      myName: "Lek",
      count: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
