<script setup lang="ts">
import { computed, ref } from "vue";
import UserCard from "@/components/UserCard.vue";

const name = ref("Nathan");

const computedName = computed(() => {
  return name.value;
});

const getName = () => {
  name.value = name.value === "Nathan" ? "John" : "Nathan";
  console.log("Name changed to:", name.value);
};
</script>

<template>
  <UserCard :name="computedName" />
  <button @click="getName">Change Name</button>
</template>

<style lang="scss"></style>
