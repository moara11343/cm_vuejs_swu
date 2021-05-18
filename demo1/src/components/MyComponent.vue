<template>
  <div>
    <h1>MyComponent {{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    title: String,
  },
};
</script>

<style></style>
