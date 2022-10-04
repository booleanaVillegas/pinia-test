<script>
import { mapStores } from "pinia";
import { useCounterStore } from "../stores/counter";
import { useProductsStore } from "../stores/products";

export default {
  data() {
    return {
      name: "",
      color: "",
      file: {},
    };
  },
  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },
  methods: {
    createNewProduct() {
      const newProduct = {
        name: this.name,
        color: this.color,
      };

      this.productsStore.newProduct(newProduct);
      this.name = "";
      this.color = "";
    }
  },
  mounted(){
    this.productsStore.loadProducts()
  }
};
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
