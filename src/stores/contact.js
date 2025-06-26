import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Linkedin, Mail, Phone, Github } from 'lucide-vue-next'

export const useContactItemStore = defineStore('contact', () => {
  const contactItems = ref([
    {
      label: 'Mail',
      value: 'vineetkumar@outlook.in',
      url: 'mailto:vineetkumar@outlook.in',
      isUrl: true,
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+91-9650-5362-59',
      url: 'tel:+91-965-053-6259',
      isUrl: true,
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: '/imvineetkumar',
      url: 'https://www.linkedin.com/in/imvineetkumar/',
      isUrl: true,
      icon: Linkedin,
    },
    {
      label: 'Github',
      value: '/vineetkmr7',
      url: 'https://github.com/vineetkmr7',
      isUrl: true,
      icon: Github,
    },
  ])
  return {contactItems};
})
