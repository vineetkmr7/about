import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillsStore = defineStore('skills', () => {
  const title = ref('Skills / Techs')
  const skills = ref([
    {
      label: 'HTML',
      icon: 'html',
      proficiency: 9,
    },
    {
      label: 'CSS',
      icon: 'css',
      proficiency: 8.5,
    },
    {
      label: 'JavaScript',
      icon: 'js',
      proficiency: 8.5,
    },
    {
      label: 'Tailwind',
      icon: 'tailwind',
      proficiency: 7,
    },
    {
      label: 'Vue',
      icon: 'vue',
      proficiency: 8,
    },
    {
      label: 'Angular',
      icon: 'angular',
      proficiency: 7.5,
    },
    {
      label: 'React',
      icon: 'react',
      proficiency: 7,
    },
    {
      label: 'Node.js',
      icon: 'node',
      proficiency: 7,
    },
  ])
  const actimizeSkills = ref([
    {
      label: 'HTML',
      icon: 'html',
      proficiency: 9,
    },
    {
      label: 'CSS',
      icon: 'css',
      proficiency: 8.5,
    },
    {
      label: 'JavaScript',
      icon: 'js',
      proficiency: 8.5,
    },
    {
      label: 'Vue',
      icon: 'vue',
      proficiency: 8,
    },
  ])
  return { skills, title, actimizeSkills }
})
