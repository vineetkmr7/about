<template>
  <section class="relative w-full flex justify-center bg-background text-foreground px-6 py-20">
    <PageNumber title="Intro" :page-number="2" />
    <div class="w-9/10 flex flex-col lg:flex-row items-center justify-between gap-10">
      <!-- Left: Text Content -->
      <div class="flex-1 max-w-4xl p-4">
        <Heading class="text-center lg:text-left" text="Hello!" />
  
        <motion.h2
          class="text-4xl text-center lg:text-left md:text-5xl pt-8 font-heading font-extrabold text-gray-800 dark:text-gray-200 mb-2"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 1, delay: 1.2 }"
        >
          <span class="text-3xl">I'm</span> Vineet Kumar
        </motion.h2>
  
        <motion.p
          class="text-sm text-center lg:text-left md:text-base font-body text-gray-500 dark:text-gray-500 italic mb-6"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8, delay: 1.4 }"
        >
          Frontend engineer passionate about building elegant, performant web experiences.
        </motion.p>
  
        <motion.p
          class="text-sm text-center lg:text-left md:text-base pt-8 font-body text-gray-500 dark:text-gray-500 leading-relaxed"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8, delay: 1.6 }"
        >
          I enjoy working across the frontend ecosystem, designing delightful interfaces and building scalable UI systems. With this portfolio, I want to showcase not just my skills but also the philosophy behind how I craft digital experiences.
        </motion.p>
      </div>
  
      <!-- Right: Image Placeholder -->
      <motion.div
        class="flex-1 flex max-w-md"
        :initial="{ opacity: 0, scale: 0 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 1.5, delay: 2 }"
      >
        <div class="flex justify-center items-center">
          <div class="relative size-60 lg:size-80 flex justify-center items-center">
            <motion.div
              class="absolute inset-0 rounded-full bg-gradient-to-tl from-primary via-primary-1/2 to-primary-1/4"
              :initial = "{ opacity: 0.8, scale: 1 }"
              :animate="{ opacity: [0.8, 0.6, 0.8], scale: [1, 1.05, 1] }"
              :transition="{ duration: 3, times: [0, 0.5, 1], repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }"
            >
            </motion.div>
            <div class="text-6xl lg:text-8xl z-10">👨‍💻</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import Heading from '@/components/Heading.vue';
import PageNumber from '@/components/PageNumber.vue';
</script>

<style scoped>
</style>