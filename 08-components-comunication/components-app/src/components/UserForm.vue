<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name : </label>
      <input type="text" required v-model="userName" />
    </div>
    <div>
      <label>Gender : </label>
      <input type="text" required v-model="gender" />
    </div>
    <div>
      <label>Email : </label>
      <input type="email" required v-model="email" />
    </div>
    <div>
      <label>Phone : </label>
      <input type="text" required v-model="phone" />
    </div>
    <div>
      <label>Age : </label>
      <input type="number" required v-model="age" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      userName: "",
      gender: "",
      email: "",
      phone: "",
      age: 0,
    };
  },
  emits: {
    "add-user": function (user) {
      if (user) {
        return true;
      } else {
        console.warn(`Invalid argument in 'add-user' event`);
        return false;
      }
    },
  },
  methods: {
    addUser() {
      const addedUser = {
        _id: new Date().toISOString(),
        name: this.userName,
        gender: this.gender.toLowerCase(),
        email: this.email,
        phone: this.phone,
        age: parseInt(this.age, 10),
        isActive: false,
      };
      this.$emit("add-user", addedUser);
    },
  },
};
</script>

<style></style>
