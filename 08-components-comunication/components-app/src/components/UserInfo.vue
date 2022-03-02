<template>
  <li>
    <h2>{{ name }} {{ isActive ? " | Active" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleActive">Toggle Active User</button>
    <ul v-if="detailsVisible">
      <li>
        <strong>Age: {{ age }}</strong>
      </li>
      <li>
        <strong>Gender: {{ gender }}</strong>
      </li>
      <li>
        <strong>Email: {{ email }}</strong>
      </li>
      <li>
        <strong>Phone: {{ phone }}</strong>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "UserContact",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      validator(value) {
        const validGenders = ["male", "female", "trans"];
        return validGenders.includes(value);
      },
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      detailsVisible: false,
    };
  },
  emits: {
    "toggle-active": function (id) {
      if (id) {
        return true;
      } else {
        console.warn(`Missing required argument 'id'event`);
        return false;
      }
    },
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleActive() {
      this.$emit("toggle-active", this.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
