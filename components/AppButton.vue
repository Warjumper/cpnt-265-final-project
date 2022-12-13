<template>
  <!-- Button -->
  <div>
    <NuxtLink
      :class="color"
      :to="link"
      class="px-6 py-2 text-white rounded hover:opacity-75 hover:bg-red-800 cursor-pointer"
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
    default: "bg-red-600",
  },
});
</script>

<style scoped>

</style>