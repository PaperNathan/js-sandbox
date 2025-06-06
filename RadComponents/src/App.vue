<script setup lang="ts">
import { ref } from "vue";
import UserCard from "@/components/UserCard.vue";

const name = ref("Nathan");
const getName = () => {
  name.value = name.value === "Nathan" ? "John" : "Nathan";
};
</script>

<template>
  <UserCard :name="name" />
  <button @click="getName">Change Name</button>
</template>

<style lang="scss"></style>
