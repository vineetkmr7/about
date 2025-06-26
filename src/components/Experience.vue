<template>
  <div>
    <motion.h2
      class="text-2xl font-heading font-bold text-foreground mb-8"
      :initial="{ opacity: 0, x: 20 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 1, delay: 0.8, type: 'spring' }"
      :in-view-options="{ once: true }"
    >
      {{ title }}
    </motion.h2>
    <ul class="space-y-10">
      <template v-for="(experience, index) in experienceItems" :key="index">
        <motion.li
          :initial="{ opacity: 0, x: 20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1, delay: index * 0.2 }"
          :in-view-options="{ once: true }"
        >
          <p class="font-bold">{{ experience.title }}</p>
          <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-4">
            {{ experience.subTitle }} | {{ experience.timeline}}
          </p>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            {{ experience.description}}
          </p>
        </motion.li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { motion } from 'motion-v'
import { useExperienceStore } from '@/stores/experience';

const { title, experience: experienceItems } = useExperienceStore();

const experiences = [
  {
    company: 'Croix Rouge',
    role: 'Partnership Project',
    duration: 'Jan – Jun 2024',
    description:
      'Designed sustainable furniture solutions using wood and recycled rope for the French Red Cross addressing poor housing conditions.',
  },
  {
    company: 'ESCP Business School',
    role: 'Entrepreneurship Program',
    duration: 'Sep – Dec 2023',
    description:
      'Developed a healthcare startup to improve medical file management, earning the “Best Ready to Invest Project” award.',
  },
  {
    company: 'Safran Seats',
    role: 'Internship',
    duration: 'Mar – Aug 2023',
    description:
      '3D renderings of Business suits and First Class for Japan Airlines, Qatar Airways, and Emirates within the Advanced Concept Team.',
  },
  {
    company: 'Centrale Lyon',
    role: 'EPSA Team',
    duration: '2022 – 2024 Season',
    description:
      'Integration in the design department for EPSA team at Centrale Lyon, designing the steering wheel, dashboard, and wrapping of the Formula Student car.',
  },
  {
    company: 'Strate',
    role: 'Communication Team',
    duration: '2021 – 2024',
    description:
      'Oversaw the 300 m² workshop at Strate: 3D printers, laser cutting, woodworking machines, and project creation for Hermès and Bouygues Real Estate.',
  },
]
</script>
