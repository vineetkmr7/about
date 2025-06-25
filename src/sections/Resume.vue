<template>
  <section class="relative flex justify-center items-center w-full bg-background text-foreground px-6 py-20 transition-colors duration-500">
    <PageNumber title="Resume" :page-number="3" />
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 p-4">

      <!-- Left Column -->
      <div class="space-y-12">
        <Heading class="text-center lg:text-left" text="Resume." />
        <Education class="text-center lg:text-left" />
        <Skills class="text-center lg:text-left" />
      </div>

      <!-- Right Column -->
      <Experience />

    </div>
  </section>
</template>

<script setup>
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Heading from '@/components/Heading.vue';
import Skills from '@/components/Skills.vue';
import PageNumber from '@/components/PageNumber.vue';

// No animation yet, can add motion-v if needed later
</script>

<style scoped>
</style>
