<template>
  <div>
    <motion.h2
      class="text-2xl font-heading font-bold text-foreground mb-8"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.6, delay: 1 }"
    >
      {{ title }}
    </motion.h2>
    <ul class="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
      <template v-for="(skill, index) of skills" :key="index">
        <motion.li
          class="justify-center lg:justify-start flex gap-4 items-center"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 1 + (index * 0.1) }"
        >
          <AIcon v-if="skill?.icon" :name="skill.icon" />
          <span v-else class="size-6"></span>
          <span>{{ skill.label }}</span>
        </motion.li>
      </template>
    </ul>
  </div>
</template>
<script setup>
import { motion } from 'motion-v'
import AIcon from './AIcon.vue';

defineProps({
  title: {
    type: String,
    default: 'Skills'
  },
  skills: {
    type: Array,
    default: () => []
  }
});

</script>
