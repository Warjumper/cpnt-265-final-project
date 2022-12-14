<template>
  <!-- Button -->
  <div>
    <NuxtLink
      :class="color"
      :to="link"
      class="px-6 py-2 text-black rounded hover:opacity-75 hover:bg-cyan-200 cursor-pointer"
      >{{ text }}</NuxtLink
    >
  </div>
</template>

<script setup>
// button
const props = defineProps({
  link: String,
  text: String,
  color: {
    type: String,
    default: "bg-cyan-200",
  },
});
</script>

<style scoped>

</style>