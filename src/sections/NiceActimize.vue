<template>
  <section
    class="relative min-h-screen bg-gradient-to-b from-background to-white dark:from-background-dark dark:to-gray-900"
  >
    <PageNumber title="Nice Actimize" :page-number="4" />
    <!-- Header -->
    <div class="text-center py-12">
      <Heading class="text-3xl md:text-5xl font-bold" text="Nice Actimize" />
      <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        IFM-X | Integrated Fraud Management Platform
      </p>
    </div>

    <!-- Hero Image or Screenshot -->
    <!-- <div class="relative max-w-7xl mx-auto px-4 opacity-80">
      <img
        src="/nice-actimize-screenshot.png"
        alt="Nice Actimize Screenshot"
        class="rounded-lg shadow-lg border dark:border-gray-700 mx-auto cursor-pointer"
        @click="openLink('https://info.nice.com/integrated-fraud-management')"
      />
    </div> -->
    
    <p
      class="max-w-4xl mx-auto px-4 text-center pt-8 font-body text-gray-500 dark:text-gray-300 leading-relaxed"
    >
      Developed a config-driven form framework (CFX) within Actimize IFMX to streamline fraud
      investigation workflows. Instead of manually coding VTL-based forms for each case type, CFX
      generates dynamic forms directly from JSON/XML configurations, supporting complex validations,
      conditional rendering, and accessibility compliance. This reduced development effort for new
      case types by ~60%, empowered business teams to configure forms without developer dependency,
      and delivered a scalable, standardized, and user-friendly experience for investigators across
      multiple financial institutions.
    </p>
    <!-- Overview Section -->
    <div class="max-w-7xl mx-auto mt-12 px-4 flex gap-8 items-center flex-col md:flex-row">
      <div class="flex-1">
        <h2 class="text-2xl font-heading font-bold text-foreground mb-8 text-center md:text-left">
          Problem
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
          In NICE Actimize IFMX, creating new case forms for investigations was time-consuming,
          repetitive, and developer-dependent. Each case type required custom frontend development,
          leading to delays, inconsistent UI, and higher maintenance overhead.
        </p>
      </div>
      <div class="flex-1">
        <img src="/ifmx-problem.png" alt="Nice Actimize Logo" class="w-full mx-auto mb-4 dark:opacity-95" />
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-12 px-4 flex gap-8 items-center flex-col-reverse md:flex-row">
      <div class="flex-1">
        <img src="/ifmx-solution.png" alt="Nice Actimize Logo" class="w-full mx-auto mb-4 dark:opacity-95" />
      </div>
      <div class="flex-1">
        <h2 class="text-2xl font-heading font-bold text-foreground mb-8 text-center md:text-left">
          Solution
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
          We designed and built the CFX (Config-based Form Framework) — a low-code, dynamic form
          engine that generates complete case forms directly from JSON/XML configs.
        </p>
        <ul class="list-none list-inside text-sm text-gray-700 dark:text-gray-300 mt-4">
          <li class="flex items-center mb-2">
            <CircleIcon class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">
              Supports custom validations, conditional rendering, nested structures
            </p>
          </li>
          <li class="flex items-center mb-2">
            <CircleIcon class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">Ensures WCAG 2.1/ADA accessibility compliance</p>
          </li>
          <li class="flex items-center mb-2">
            <CircleIcon class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">
              Modular, reusable, and scalable components for faster delivery
            </p>
          </li>
          <li class="flex items-center mb-2">
            <CircleIcon class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">
              Seamless integration with IFMX backend for case creation, updates, and workflows
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-12 px-4 flex gap-8 items-center flex-col md:flex-row">
      <div class="flex-1">
        <h2 class="text-2xl font-heading font-bold text-foreground mb-8 text-center md:text-left">
          Impact
        </h2>
        <ul class="list-none list-inside text-sm text-gray-700 dark:text-gray-300 mt-4">
          <li class="flex items-center mb-2">
            <CheckCircle class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">~60% reduction in development effort for new case types</p>
          </li>
          <li class="flex items-center mb-2">
            <CheckCircle class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">Empowered business teams to configure forms without recurring dev work</p>
          </li>
          <li class="flex items-center mb-2">
            <CheckCircle class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">Improved investigator efficiency with standardized, user-friendly forms</p>
          </li>
          <li class="flex items-center mb-2">
            <CheckCircle class="inline-block w-4 h-4 mr-1" />
            <p class="inline-block flex-1">Scaled across multiple financial institutions with varied workflows</p>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <Skills class="text-center lg:text-left" title="Technologies" :skills="actimizeSkills" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from '@/components/Heading.vue'
import PageNumber from '@/components/PageNumber.vue'
import Skills from '@/components/Skills.vue'
import { CheckCircle, CircleIcon } from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/skills'

const { actimizeSkills } = useSkillsStore()
</script>
