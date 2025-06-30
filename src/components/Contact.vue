<template>
  <section
    class="relative flex justify-center w-full bg-background text-foreground px-6 py-20 transition-colors duration-500"
  >
    <PageNumber title="Contact" :page-number="5" />
    <div class="w-full max-w-7xl flex flex-col lg:flex-row justify-around gap-10 items-center">
      <Heading text="Thank you." class="mb-8" />
      <div class="flex flex-col">
        <motion.h1
          class="text-2xl font-heading font-bold text-foreground mb-8"
          :initial="{ opacity: 0, x: 20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.8 }"
          :in-view-options="{ once: true }"
        >
          Contact Me
        </motion.h1>
        <ul class="text-sm text-gray-700 dark:text-gray-300">
          <template v-for="(item, index) of items" :key="index">
            <motion.li 
              class="flex mb-4 gap-4"
              :initial="{ opacity: 0, x: 20 }"
              :while-in-view="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.6, delay: 0.8 + (index * 0.1) }"
              :in-view-options="{ once: true }"
            >
              <component :is="item.icon" class="size-6" />
              <a v-if="item?.isUrl && item?.url" class="underline text-primary dark:text-primary-dark" target="_blank" :href="item?.url">
                {{ item.value }} <ArrowUpRightIcon class="inline size-3 ml-1" />
              </a>
              <span v-else class="grow">{{ item.value }}</span>
            </motion.li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from './Heading.vue'
import PageNumber from '@/components/PageNumber.vue'
import { motion } from 'motion-v'
import { useContactItemStore } from '@/stores/contact'
import { ArrowUpRightIcon } from 'lucide-vue-next'

const { contactItems: items } = useContactItemStore()
</script>
