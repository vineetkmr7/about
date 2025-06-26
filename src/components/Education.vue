<template>
  <div>
    <motion.h2
      class="text-2xl font-heading font-bold text-foreground mb-8"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 1, delay: 1 }"
    >
      Education
    </motion.h2>
    <ul class="space-y-8">
      <template v-for="(item, index) of educationItems" :key="index">
        <motion.li
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 1 + index * 0.2, delay: 1 + index * 0.2 }"
        >
          <p class="font-semibold">{{ item.degree }}</p>
          <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-4">{{ item.timeline }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ item.university }}</p>
        </motion.li>
      </template>
    </ul>
  </div>
</template>
<script setup>
import { useEducationStore } from '@/stores/education'
import { motion } from 'motion-v'

const { education: educationItems } = useEducationStore()
</script>
