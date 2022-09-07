import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  const getCount = computed(() => count.value)

  function increment() {
    console.log('im being called')
    count.value++
  }

  return { count, doubleCount, getCount, increment }
})
