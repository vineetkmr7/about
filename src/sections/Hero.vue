<template>
  <section>
    <div
      class="relative flex items-center justify-center w-full h-screen overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      <div class="absolute inset-0">
        <motion.div
          class="w-full h-full [background-image:radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent to-primary/20 dark:from-primary-dark/20 dark:to-primary-light/20"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.5 }"
        />
      </div>

      <div class="relative z-10 text-center px-4">
        <h1
          class="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-heading font-extrabold tracking-tight text-primary dark:text-primary-light flex justify-center gap-1"
        >
          <span v-for="(char, i) in 'PORTFOLIO'.split('')" :key="i" class="inline-block">
            <motion.span
              :initial="{ opacity: 0, y: 200 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.1 + i * 0.1, duration: 1 }"
            >
              {{ char }}
            </motion.span>
          </span>
        </h1>

        <motion.p
          class="mt-4 text-base md:text-lg font-light text-gray-700 dark:text-gray-300"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 1.6 }"
        >
          Minimal. Performant. Memorable.
        </motion.p>
      </div>

      <motion.div
        class="absolute bottom-12 left-12 text-left text-xs text-gray-500"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 2.4 }"
      >
        <p class="text-lg mb-2 tracking-wider font-bold text-gray-700 dark:text-gray-300">Vineet Kumar</p>
        <p class="text-base/5 mb-1 font-light">Technical Lead</p>
        <p class="text-base/5 mb-1 font-light">Servion Global Solutions Pvt Ltd</p>
        <p class="text-base/5 font-light">- {{ year }} -</p>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
const year = new Date().getFullYear()
</script>

<style scoped>
/* Removed custom animations: now using motion-v */
</style>
