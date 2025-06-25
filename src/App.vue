<template>
  <div :class="[$colorMode, 'min-h-screen']">
    <transition name="fade" mode="out-in">
      <div
        v-if="!isLoading"
        key="$colorMode"
        class="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark"
      >
        <Header :isDark="isDark" @toggleDarkMode="toggleDarkMode" />
        <main>
          <router-view />
        </main>
        <Footer />
      </div>
      <Spinner v-else />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Spinner from './components/Spinner.vue'
import { useDarkMode } from './composables/useDarkMode'

const isLoading = ref(true)
const { isDark, $colorMode, toggleDarkMode } = useDarkMode()

onMounted(() => {
  const html = document.documentElement
  html.classList.add('transition-colors', 'duration-5s', 'ease-in-out')

  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
