<script setup lang="ts">
import Contact from '@/components/Contact.vue';
import ContentIndex from '@/sections/ContentIndex.vue';
import Hero from '@/sections/Hero.vue'
import Intro from '@/sections/Intro.vue';
import Resume from '@/sections/Resume.vue';
</script>

<template>
  <Hero class="space-y-8" />
  <Intro />
  <Resume />
  <ContentIndex />
  <Contact />
</template>
