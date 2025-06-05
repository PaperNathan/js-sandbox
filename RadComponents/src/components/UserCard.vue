<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

console.log("UserCard props:", props);
</script>

<template>
  <div class="UserCard">
    <rad-user-card :name="props.name" avatar="https://picsum.photos/200">
      <div slot="email">email@gmail.com</div>
      <div slot="phone">555-555-5555</div>
    </rad-user-card>
  </div>
</template>

<style lang="scss"></style>
