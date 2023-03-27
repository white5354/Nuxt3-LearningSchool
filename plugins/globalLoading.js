import {createDiscreteApi} from 'naive-ui'

export default defineNuxtPlugin(nuxtApp => {
  const bar = ref(null)
  nuxtApp.hook('page:start', (e) => {
    bar.value?.start()
  })
  nuxtApp.hook('page:finish', (e) => {
    setTimeout(() => {
      bar.value?.finish()
    },150)
  })
  nuxtApp.hook('app:mounted', (e) => {
    console.log('page:start', e)
    const {loadingBar} = createDiscreteApi(['loadingBar'])
    bar.value = loadingBar
  })
  nuxtApp.hook('app:error', (e) => {
    setTimeout(() => {
      bar.value?.finish()
    },150)
  })
  

})
