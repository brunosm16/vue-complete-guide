<template>
  <div class="user-data">
    <form @submit.prevent="updateUser">
      <input type="text" v-model="userName" />
      <input type="number" v-model="age" />
      <button>save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserData",
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  emits: {
    "update-user": function (updatedUser) {
      if (updatedUser) {
        return true;
      } else {
        console.warn(`updateUser object was not passed on 'update-user' event`);
        return false;
      }
    },
  },
  methods: {
    updateUser() {
      this.$emit("update-user", {
        userName: this.userName,
        age: parseInt(this.age),
      });
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
label {
  text-transform: uppercase;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}
input {
  font: inherit;
  color: black;
  padding: 0.4em;
  width: 100%;
  background: #7c7cdf41;
  border: 3px dashed #7d7de0;
  font-weight: bold;
}
input::placeholder {
  font-weight: normal;
  color: #7d7de0;
}
button {
  font: inherit;
  background: #7d7de0;
  border: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 0.5em 1.4em;
  border-radius: 10px;
  margin: auto;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
