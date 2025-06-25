import { ref, onMounted } from 'vue'
export function useDarkMode() {
  const isDark = ref(false)
  const $colorMode = ref('')

  const applyTheme = (theme) => {
    const html = document.documentElement
    html.classList[isDark.value ? 'add' : 'remove']('dark')
    localStorage.setItem('theme', theme)
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    $colorMode.value = isDark.value ? 'dark' : 'light'
    applyTheme($colorMode.value)
  }

  onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark'
    $colorMode.value = isDark.value ? 'dark' : 'light'
    applyTheme($colorMode.value)
  })

  return {
    isDark,
    $colorMode,
    toggleDarkMode,
  }
}
