import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExperienceStore = defineStore('experience', () => {
  const title = ref('Experiences');
  const experience = ref([
    {
      title: 'Servion Global Solutions Pvt Ltd',
      subTitle: 'Technical Lead',
      timeline: '2023 - Preset',
      description: 'Global, end-to-end consulting-led specialist in customer experience systems integration and managed services',
    },
    {
      title: 'Servion Global Solutions Pvt Ltd',
      subTitle: 'Senior Software Engineer',
      timeline: '2020 - 2023',
      description: 'Global, end-to-end consulting-led specialist in customer experience systems integration and managed services',
    },
    {
      title: 'Wipro',
      subTitle: 'Senior Project Engineer',
      timeline: '2019 - 2020',
      description: 'A comprehensive IT and consulting services provider that helps businesses worldwide with technology-driven transformation and operational excellence.',
    },
    {
      title: 'Wipro',
      subTitle: 'Project Engineer',
      timeline: '2015 - 2019',
      description: 'A comprehensive IT and consulting services provider that helps businesses worldwide with technology-driven transformation and operational excellence.',
    },
  ])
  return { title, experience }
})
