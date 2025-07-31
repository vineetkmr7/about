import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
  const title = ref('Projects.');
  const projectIndex = ref({
    'Fraud Investigations': {
      name: 'Fraud Investigations',
      client: 'Nice Actimize.',
      page: '03',
    },
    'CRM Ingegrations': {
      name: 'CRM Ingegrations',
      client: 'Dialpad.',
      page: '03',
    },
    'Customer experience journeys': {
      name: 'Customer experience journeys',
      client: 'BryterCX.',
      page: '03',
    },
    'Operations Manager Cloud (OMC) Infrastructure': {
      name: 'Operations Manager Cloud (OMC) Infrastructure',
      client: 'Ericsson.',
      page: '03',
    },
    'Datalabs - R&D department for fraud detection and prevention apps': {
      name: 'Datalabs - R&D department for fraud detection and prevention apps',
      client: 'HDFC Life.',
      page: '03',
    },
  'Manage crop insurance policies and claims': {
      name: 'Manage crop insurance policies and claims',
      client: 'Agriculture Insurance Company (AIC) of India.',
      page: '03',
    },
    'Self configuring network node integration': {
      name: 'Self configuring network node integration',
      client: 'Ericsson.',
      page: '03',
    },
  });
  return { title, projects: ref(Object.values(projectIndex.value)), projectIndex }
});