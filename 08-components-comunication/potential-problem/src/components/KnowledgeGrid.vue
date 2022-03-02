<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>

<script>
import KnowledgeElement from "../components/KnowledgeElement.vue";
export default {
  components: { KnowledgeElement },
  name: "KnowledgeGrid",
  inject: ["topics"],
  emits: ["select-topic"],
};
</script>
