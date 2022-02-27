const RESULT_VALUE = 37;

const app = Vue.createApp({
  data() {
    return {
      result: 0,
      message: "",
      timer: 0,
    };
  },
  watch: {
    result() {
      if (this.result > RESULT_VALUE) this.message = "too much";
      if (this.result < RESULT_VALUE) this.message = "not there yet";
      if (this.result === RESULT_VALUE) this.message = "right number";
      this.counter += 1;

      const appContext = this;

      if (this.result != 0) {
        setTimeout(() => {
          appContext.result = 0;
        }, 5000);
      }
    },
  },
  methods: {
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
  },
});

app.mount("#assignment");
