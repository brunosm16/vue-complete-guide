const app = Vue.createApp({
  data() {
    return {
      goals: [],
      textGoal: "",
    };
  },

  methods: {
    addGoal() {
      this.textGoal &&
        this.goals.push({ id: Math.random(), goal: this.textGoal });
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
