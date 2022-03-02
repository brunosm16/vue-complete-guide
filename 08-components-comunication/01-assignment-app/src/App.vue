<template>
  <div id="app">
    <ActiveUser :name="user.userName" :age="user.age" />
    <UserData @update-user="updateUserData" />
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  name: "App",
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      user: {
        userName: "Bruno",
        age: 23,
      },
    };
  },
  methods: {
    updateUserData({ userName, age }) {
      this.user.userName = userName;
      this.user.age = age;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
