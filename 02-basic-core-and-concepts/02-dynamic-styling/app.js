const app = Vue.createApp({
  data() {
    return {
      selectedBoxA: false,
      selectedBoxB: false,
      selectedBoxC: false,
    };
  },
  computed: {
    boxBClasses() {
      return { active: this.selectedBoxB };
    },
    boxCClasses() {
      return { active: this.selectedBoxC };
    },
  },
  methods: {
    toggleBox(box) {
      switch (box) {
        case "A":
          this.selectedBoxA = !this.selectedBoxA;
          break;
        case "B":
          this.selectedBoxB = !this.selectedBoxB;
          break;
        case "C":
          this.selectedBoxC = !this.selectedBoxC;
          break;
      }
    },
  },
});

app.mount("#styling");
