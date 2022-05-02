<template>
  <header>
    <slot name="heading" v-if="this.$slots.heading">
      <h1>Fallback Heading Value</h1>
    </slot>
    <slot name="content"></slot>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: grid;
  place-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
