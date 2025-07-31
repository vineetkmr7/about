<template>
  <section class="min-h-screen bg-gradient-to-b from-background to-white dark:from-background-dark dark:to-gray-900">
    <!-- Header -->
    <div class="text-center py-12">
      <Heading class="text-3xl md:text-5xl font-bold" text="Nice Actimize" />
      <p class="mt-4 text-gray-600 dark:text-gray-400 text-lg">
        IFM-X | Integrated Fraud Management Platform
      </p>
    </div>

    <!-- Hero Image or Screenshot -->
    <div class="max-w-7xl mx-auto px-4 opacity-70">
      <img
        src="/nice-actimize-screenshot.png"
        alt="Nice Actimize Screenshot"
        class="rounded-lg shadow-lg border dark:border-gray-700 mx-auto"
      />
    </div>

    <!-- Overview Section -->
    <div class="max-w-7xl mx-auto mt-12 px-4 flex gap-8">
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Project Overview
        </h2>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          The Nice Actimize project focused on building a scalable, performant, and intuitive fraud prevention platform.
          As the lead frontend engineer, I collaborated closely with designers, product owners, and backend developers to
          create accessible and responsive interfaces. The challenge was to balance complex workflows with simplicity,
          ensuring usability for analysts detecting fraudulent activity.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          My Role
        </h2>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-400">
          <li>Designed & led a config-based ActOne customization framework, reducing development time by 60%.</li>
          <li>Developed reusable Vue.js components with TailwindCSS.</li>
          <li>Implemented dark/light theme toggle with animations.</li>
          <li>Optimized large data tables & charts for performance.</li>
          <li>Improved accessibility (WCAG) & cross-browser compatibility.</li>
          <li>Worked with REST & WebSocket APIs for real-time updates.</li>
        </ul>
  
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          Technologies Used
        </h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">Vue 3</span>
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">TailwindCSS</span>
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">Vite</span>
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">Motion One</span>
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">REST APIs</span>
          <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">WebSockets</span>
        </div>
  
        <!-- Call to Action -->
        <div class="mt-12 text-center">
          <a
            href="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from '@/components/Heading.vue';

// optional props or emits here if needed
</script>
