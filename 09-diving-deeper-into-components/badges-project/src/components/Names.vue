<template>
  <ul>
    <li v-for="(name, index) in names" :key="`${name}${index}`">
      <slot :item-name="name" test-props="name displayed" name="name-item"/>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      names: ["Bruno", "Márcia", "Ricardo"],
    };
  },
};
</script>

<style></style>
