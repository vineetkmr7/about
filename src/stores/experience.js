import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExperienceStore = defineStore('experience', () => {
  const title = ref('Experiences');
  const experience = ref([
    {
      company: 'Servion Global Solutions',
      roles: [
        {
          title: 'Technical Lead',
          timeline: '2023 - Present',
          location: 'Remote',
        },
        {
          title: 'Senior Software Engineer',
          timeline: '2020 - 2023',
          location: 'Remote',
        },
      ],
      description: 'Global, end-to-end consulting-led specialist in customer experience systems integration and managed services',
      logoPath: 'servion-logo.jpeg',
    },
    {
      company: 'Wipro Limited',
      roles: [
        {
          title: 'Senior Project Engineer',
          timeline: '2019 - 2020',
          location: 'Bangalore, India',
        },
        {
          title: 'Project Engineer',
          timeline: '2015 - 2019',
          location: 'Chennai | Greater Noida, India',
        },
      ],
      description: 'A comprehensive IT and consulting services provider that helps businesses worldwide with technology-driven transformation and operational excellence.',
      logoPath: 'wipro-logo.svg',
    },
  ])
  return { title, experience }
})
