<template>
  <component
    :is="icons[name] || MissingIcon"
    v-bind="attrs"
    class="w-6 h-6"
  />
</template>

<script setup>
import { defineAsyncComponent, useAttrs } from 'vue'

// Accepts a prop called name
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const attrs = useAttrs()

// Lazy load SVG icon components
const icons = {
  vue: defineAsyncComponent(() => import('@/components/icons/VueIcon.vue')),
  react: defineAsyncComponent(() => import('@/components/icons/ReactIcon.vue')),
  angular: defineAsyncComponent(() => import('@/components/icons/AngularIcon.vue')),
  github: defineAsyncComponent(() => import('@/components/icons/GithubIcon.vue')),
  linkedin: defineAsyncComponent(() => import('@/components/icons/LinkedinIcon.vue')),
  tailwind: defineAsyncComponent(() => import('@/components/icons/TailwindIcon.vue')),
  html: defineAsyncComponent(() => import('@/components/icons/HtmlIcon.vue')),
  css: defineAsyncComponent(() => import('@/components/icons/CssIcon.vue')),
  js: defineAsyncComponent(() => import('@/components/icons/JsIcon.vue')),
  node: defineAsyncComponent(() => import('@/components/icons/NodejsIcon.vue')),
}

// Fallback placeholder icon
const MissingIcon = {
  template: '<svg class="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" /></svg>'
}
</script>
