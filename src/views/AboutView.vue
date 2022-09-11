<script>
  import { mapStores, storeToRefs, mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useProductsStore } from '../stores/products'


export default {
  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts
    }
  },
  methods: {
    createNewProduct(event) {
      console.log(event.target.value)
      this.productsStore.newProduct(event.target.value)
      console.log(this.getProducts)
      event.target.value = ''
    }
  },
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h4 v-for="product in allProducts" :key="product">{{ product }}</h4>

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
