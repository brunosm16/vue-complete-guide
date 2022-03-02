<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid />
  </section>
</template>

<script>
import KnowledgeGrid from "../components/KnowledgeGrid.vue";

export default {
  name: "KnowledgeBase",
  components: {
    KnowledgeGrid,
  },
  emits: ["select-topic"],
};
</script>
