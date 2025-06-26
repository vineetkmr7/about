<template>
  <section
    class="relative flex items-center justify-center w-full  px-6 py-20 bg-background text-foreground transition-colors duration-500"
    ref="index-container"
  >
    <PageNumber title="Summary" :page-number="4" />
    <div
      ref="index-target"
      class="relative flex-1 max-w-7xl p-4 flex flex-col items-start justify-between gap-12"
    >
      <Heading class="self-center" :text="title" />
      <div
        v-for="(item, index) in projects"
        :key="index"
        class="flex w-full items-center justify-between"
      >
        <div class="flex flex-col">
          <p class="text-lg font-semibold font-heading text-foreground">{{ item.client }}</p>
          <p class="text-sm italic font-body text-gray-700 dark:text-gray-300">
            {{ item.name }}
          </p>
        </div>
        <motion.p
          class="border-b dark:border-gray-600 mx-12"
          :style="{ width }"
        />
        <div class="text-nowrap text-xs text-gray-700 dark:text-gray-300">P/ {{ item.page }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from '@/components/Heading.vue'
import PageNumber from '@/components/PageNumber.vue'
import { motion, useScroll, useTransform } from 'motion-v'
import { useTemplateRef } from 'vue'
import { useProjectStore } from '@/stores/project'

const { title, projects } = useProjectStore();

const indexTarget = useTemplateRef('index-target')
const { scrollYProgress } = useScroll({
  target: indexTarget,
  offset: ['start end', 'end start'],
})

const width = useTransform(scrollYProgress, [0.1, 0.5], ["0", "50%"])

console.log("here projects => ", projects)
</script>
