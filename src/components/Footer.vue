<template>
  <footer
    class="mt-10 text-center p-4 text-sm text-text-secondaryLight dark:text-text-secondaryDark"
  >
    Portfolio {{ year }} © Vineet Kumar
  </footer>
</template>
<script setup>

const year = new Date().getFullYear();
</script>
