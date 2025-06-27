<template>
  <div>
    <div class="relative mx-auto text-center mb-8">
      <motion.span
        class="block text-7xl sm:text-9xl font-heading font-bold text-primary dark:text-primary-light select-none"
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 0.25, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        {{ text }}
      </motion.span>
      <motion.h1
        class="absolute left-0 right-0 -bottom-4 text-6xl sm:text-7xl inline-block font-heading font-bold text-primary dark:text-primary-light "
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        {{ text }}
      </motion.h1>
    </div>
  </div>
</template>
<script setup>
import { motion } from 'motion-v'
defineProps({
  text: {
    type: String,
    default: 'Hello!'
  }
})
</script>
