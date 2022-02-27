const app = Vue.createApp({
  data() {
    return {
      textClass: "",
      styleParagraphClass: "",
      textBgColor: "",
    };
  },
  computed: {
    styleParagraphClasses() {
      return [this.textClass, this.styleParagraphClass];
    },
    textBgColorStyles() {
      return { backgroundColor: this.textBgColor };
    },
  },
  methods: {
    toggleStyleParagraph() {
      const isActive = this.styleParagraphClass === "active";
      this.styleParagraphClass = isActive ? "hidden" : "active";
    },
    setTextClass(event) {
      const inputText = event.target.value;
      const validClasses = ["user1", "user2"];
      if (validClasses.includes(inputText)) this.textClass = inputText;
      else this.textClass = "";
    },
    setTextBgColor(event) {
      this.textBgColor = event.target.value;
    },
  },
});

app.mount("#assignment");
