<template>
  <header class="fixed z-10 right-2 top-2 text-center">
    <ThemeToggler :isDark="isDark" @toggleDarkMode="$emit('toggleDarkMode')" />
  </header>
</template>

<script setup>
import ThemeToggler from './ThemeToggler.vue'

defineProps({ isDark: Boolean })
defineEmits(['toggleDarkMode'])
</script>
