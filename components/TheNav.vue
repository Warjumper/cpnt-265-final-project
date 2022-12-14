<template>
  <div>
    <nav
      class="sticky top-0 z-10 bg-gradient-to-r from-pink-800 to-indigo-800 text-white mx-auto px-12"
    >
      <div class="flex items-center justify-between pl-8">
        <!-- logo -->
        <div>
          <NuxtLink to="/">
            <img
              class="object-contain h-20 w-20"
              src="/images/logo1.svg"
              alt="logo"
          /></NuxtLink>
        </div>
        <!-- hamburger -->
        <div
          class="md:hidden cursor-pointer hover:opacity-75"
          @click.prevent="toggleMenu"
        >
          <Icon name="quill:hamburger" size="30" />
        </div>
        <!-- links -->
        <div class="hidden md:flex space-x-12 text-lg">
          <li class="hover:text-cyan-400 list-none">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="hover:text-cyan-400 list-none">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="hover:text-cyan-400 list-none">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li class="hover:text-cyan-400 list-none">
            <NuxtLink to="/contact">Contacts</NuxtLink>
          </li>
        </div>
      </div>
    </nav>
    <!-- sidebar -->
    <TheSidebar v-show="showMenu" />
  </div>
</template>

<script setup>
// sidebar
const showMenu = ref(false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<style scoped></style>
