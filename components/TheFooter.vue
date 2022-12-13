<template>
  <footer class="bg-gradient-to-r from-blue-900 to-purple-900 md:visible">
    <div class="bottom-0 w-full px-4 py-2 text-black">
      <div
        class="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between pl-20 pr-20 pt-2"
      >
        <img class="h-10 w-48" src="/images/logo.png" alt="unseen riches logo" />
        <div class="flex justify-around space-x-6 pb-4 pt-4 text-lg text-white">
          <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-red-600">About</NuxtLink>
          <NuxtLink to="/events" class="hover:text-red-600"
            >Events</NuxtLink
          >
          <NuxtLink to="/contact" class="hover:text-red-600"
            >Contact</NuxtLink
          >
        </div>
      </div>

      <!-- socials -->
      <div class="justify-center space-x-8 hidden md:flex">
        <!-- link 1 -->
        <a href="#">
          <img
            src="/images/facebook.svg"
            alt="facebook"
            class="h-8 hover:opacity-50"
          />
        </a>

        <!-- link 2 -->
        <a href="#">
          <img
            src="/images/twitter.svg"
            alt="twitter"
            class="h-8 hover:opacity-50"
          />
        </a>

        <!-- link 3 -->
        <a href="#">
          <img
            src="/images/instagram.svg"
            alt="instagram"
            class="h-8 hover:opacity-50"
          />
        </a>

        <!-- link 4 -->
        <a href="#">
          <img
            src="/images/tiktok.svg"
            alt="tiktok"
            class="h-8 hover:opacity-50"
          />
        </a>
      </div>

      <!-- copyright -->
      <div class="text-center p-2">
        Copyright &copy; | 2022 Unseen Riches &trade; | Jesse h
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
