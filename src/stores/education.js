import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEducationStore = defineStore('education', () => {
  const education = ref([
    {
      degree: 'M.Tech in Software Engineering',
      timeline: '2016-2019',
      university: 'Birla Institute of Technology and Science (BITS), Pilani',
    },
    {
      degree: 'B.Sc (Honours) Computer Science',
      timeline: '2012-2015',
      university: 'Delhi University',
    },
  ])
  return { education }
})
