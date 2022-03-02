<template>
  <div class="active-user">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: "ActiveUser",
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
h3 {
  text-align: center;
  width: 100%;
  background: yellow;
}
section {
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border: 3px dashed #7d7de0;
}
</style>
