<template>
  <button
    @click="$emit('toggleDarkMode')"
    class="w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition-colors duration-300"
  >
    <span class="sr-only">Toggle theme</span>

    <!-- Animated Icon -->
    <motion.div
      :initial="{ rotate: 0, scale: 1 }"
      :animate="{ rotate: isDark ? 360 : 0, scale: [1, 1.2, 1] }"
      :transition="{ duration: 0.8, ease: 'easeInOut' }"
      class="w-6 h-6 text-text-secondaryDark dark:text-primary-light"
      key="icon"
    >
      <component :is="isDark ? Moon : Sun" class="w-6 h-6" />
    </motion.div>
  </button>
</template>

<script setup>
import { motion } from 'motion-v'
import { Sun, Moon } from 'lucide-vue-next'

defineProps({ isDark: Boolean })
defineEmits(['toggleDarkMode'])
</script>