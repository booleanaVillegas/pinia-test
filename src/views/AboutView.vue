<script>
  import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useProductsStore } from '../stores/products'


export default {
  setup() {
    const counterStore = useCounterStore()
    const productsStore = useProductsStore()


    return { productsStore: { ...productsStore}, counterStore }
  },
  computed: {
    doubleCount() {
     return this.counterStore.doubleCount
    },
    allProducts() {
      console.log(this.productsStore)
      return this.productsStore.getProducts
    }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
    createNewProduct(event) {
      console.log(event.target.value)
      this.productsStore.newProduct(event.target.value)
      event.target.value = ''
    }
  },
}
</script>

<template>
  <div class="about">
    <h2>Productos</h2>

    <div v-for="product in allProducts" :key="product.name">
      <h3>{{ product.name }}</h3>
      <h3>{{ product.author }}</h3>
      <h3>{{ product.description }}</h3>
      <h3>{{ JSON.stringify(product.genres) }}</h3>
      <br/>
    </div>

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
