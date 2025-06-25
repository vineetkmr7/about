import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExperienceStore = defineStore('experience', () => {
  const title = ref('Experiences');
  const experience = ref([
    {
      title: 'Servion Global Solutions Pvt Ltd',
      subTitle: 'Technical Lead',
      timeline: '2016-2019',
      university: 'Birla Institute of Technology and Science (BITS), Pilani',
    },
    {
      title: 'Servion Global Solutions Pvt Ltd',
      subTitle: 'Technical Lead',
      timeline: '2012-2015',
      university: 'Delhi University',
    },
  ])
  return { title, experience }
})
