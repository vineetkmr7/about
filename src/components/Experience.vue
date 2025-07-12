<template>
  <div>
    <motion.h2
      class="text-2xl font-heading font-bold text-foreground mb-8 text-center md:text-left"
      :initial="{ opacity: 0, x: 20 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.8, delay: 0.5 }"
      :in-view-options="{ once: true }"
    >
      {{ title }}
    </motion.h2>
    <ul class="space-y-10">
      <template v-for="(experience, index) in experienceItems" :key="index">
        <motion.li
          :initial="{ opacity: 0, x: 20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 0.5 + (index * 0.2) }"
          :in-view-options="{ once: true }"
        >
          <div class="flex items-center mb-4 gap-4">
            <img
              v-if="experience.logoPath"
              :src="experience.logoPath"
              :alt="`${experience.title} Logo`"
              class="w-20 h-auto rounded-full bg-gray-100 dark:bg-gray-300"
            />
            <div>
              <p class="font-bold">{{ experience.company }}</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">
                {{ experience.description}}
              </p>
            </div>
          </div>
          <template v-if="experience.roles && experience.roles.length">
            <ul class="">
              <li
                v-for="role in experience.roles" :key="role.title"
                class="text-gray-700 dark:text-gray-300 mb-2 flex gap-4"
              >
                <div class="relative w-10 ml-10 mt-8 border-l-2 border-gray-300 dark:border-gray-600">
                  <span class="absolute -top-6 -left-1.5 size-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                </div>
                <div class="mb-8">
                  <p>{{ role.title }}</p>
                  <p class="text-sm mb-4 text-gray-700 dark:text-gray-300">{{ role.timeline }}</p>
                  <p class="text-sm italic text-gray-700 dark:text-gray-300">{{ role.location }}</p>
                </div>
              </li>
            </ul>
          </template>
        </motion.li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { motion } from 'motion-v'
import { useExperienceStore } from '@/stores/experience';

const { title, experience: experienceItems } = useExperienceStore();
</script>
