<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <base-card>
      <template #heading>
        <h1>Lorem ipsum dolor sit amet</h1>
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          dolor sed viverra ipsum nunc aliquet bibendum enim. Aliquam ut
          porttitor leo a diam sollicitudin tempor id eu.
        </p>
      </template>
    </base-card>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <names>
      <template #name-item="slotProps">
        <h2>{{ slotProps.itemName }}</h2>
        <p>{{ slotProps.testProps }}</p>
      </template>
    </names>
    <button @click="toggleComponent('active-goals')">show active goals</button>
    <button @click="toggleComponent('current-goals')">
      show completed goals
    </button>
    <component :is="selectedComponent" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import BaseCard from "./components/BaseCard.vue";
import Names from "./components/Names.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import CurrentGoals from "./components/CurrentGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    BaseCard,
    Names,
    ActiveGoals,
    CurrentGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "active-goals",
    };
  },
  methods: {
    toggleComponent(componentName) {
      this.selectedComponent = componentName;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
