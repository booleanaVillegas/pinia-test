<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  computed: {
    doubleCount() {
      return this.counterStore.doubleCount
    }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
  },
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This is the counter</h2>
    <p>{{ doubleCount}}</p>
    <button @click="incrementAndPrint">Increment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
