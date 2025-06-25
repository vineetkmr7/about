<template>
  <div
    class="invisible 2xl:visible absolute -rotate-90 left-0 top-1/2 text-sm grid grid-cols-3 gap-2 text-gray-400 dark:text-gray-600"
  >
    <span class="text-gray-500">{{ title }}</span>
    <span class="text-center">|</span>
    <span>P/ {{ pageNumber < 10 ? '0' + pageNumber : pageNumber }}</span>
  </div>
</template>
<script setup>
defineProps({
  pageNumber: {
    type: Number,
    default: 2,
  },
  title: {
    type: String,
    default: 'Intro',
  },
})
</script>
