<template>
  <div>
    <h1>MyComponent {{ title }}</h1>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    title: String,
  },
  methods: {
    clear() {
      this.$emit("onClear", {});
    },
  },
};
</script>

<style></style>
