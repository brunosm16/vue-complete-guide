const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      textTask: "",
      visible: true,
      toggleMessage: "Hide",
    };
  },
  methods: {
    addTask() {
      if (this.textTask) {
        this.tasks.push({ id: Math.random(), taskItem: this.textTask });
      }
    },
    toggleList() {
      this.visible = !this.visible;
      this.toggleMessage = this.visible ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
