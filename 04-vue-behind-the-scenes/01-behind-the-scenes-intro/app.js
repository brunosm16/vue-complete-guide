const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      // this.currentUserInput = event.target.value;
    },
    setText() {
      // Using ref to get input value
      // this.message = this.currentUserInput;
      // this.message = this.$ref
      this.message = this.$refs.userText.value;
      this.$refs.sectionHeader.textContent = 'Changed Header with refs'
      console.dir(this.$refs.sectionHeader);
    },
  },
});

app.mount("#app");
