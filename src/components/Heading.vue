<template>
  <div>
    <div class="relative h-32 inline-block mb-8">
      <motion.span
        class="text-9xl font-heading font-bold text-primary dark:text-primary-light select-none"
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 0.25, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 2, delay: 1 }"
      >
        {{ text }}
      </motion.span>
      <motion.h1
        class="absolute left-1/4 -bottom-4 text-7xl inline-block font-heading font-bold text-primary dark:text-primary-light mb-2"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 1.2, delay: 1 }"
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
