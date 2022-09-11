<script>
  import { mapStores, storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useProductsStore } from '../stores/products'


export default {
  computed: {
    doubleCount() {
     return this.counterStore.doubleCount
    },
    allProducts() {
      console.log(this.productsStore)
      return this.productsStore.getProducts
    },
    ...mapStores(useProductsStore, useCounterStore)
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
    createNewProduct(event) {
      console.log(event.target.value)
      this.productsStore.newProduct(event.target.value)
      console.log(this.productsStore.getProducts)
      event.target.value = ''
    }
  },
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This is the counter</h2>
    <p>{{ counterStore.getCount }}</p>
    <p>{{ doubleCount}}</p>
    <button @click="incrementAndPrint">Increment</button>

    <h4 v-for="product in productsStore.getProducts" :key="product">{{ product }}</h4>

    <input type="text" name="Product" id="newProduct" @change="(e) => createNewProduct(e)">
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
