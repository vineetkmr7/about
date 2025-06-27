<template>
  <div>
    <div
      class="flex justify-between gap-6"
    >
      <template v-for="(count, index) of counters" :key=index>
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8, delay: 0.6 + (index * 0.2) }"
        >
          <p class="text-4xl text-primary mb-4">{{ count.value }}</p>
          <p class="text-xl font-heading text-wrap text-gray-700 dark:text-gray-300">{{ count.label }}</p>
        </motion.div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { motion } from 'motion-v'
const counters = [
  {
    label: "Total years of experience",
    value: "10+"
  },
  {
    label: "Production ready projects",
    value: "16+"
  },
];
</script>