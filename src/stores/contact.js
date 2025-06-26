import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Linkedin, Mail, Phone, Github } from 'lucide-vue-next'

export const useContactItemStore = defineStore('contact', () => {
  const contactItems = ref([
    {
      label: 'Mail',
      value: 'vineetkumar@outlook.in',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+91-9650-5362-59',
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/imvineetkumar/',
      isUrl: true,
      icon: Linkedin,
    },
    {
      label: 'Github',
      value: 'https://github.com/vineetkmr7',
      isUrl: true,
      icon: Github,
    },
  ])
  return {contactItems};
})
