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
    <h1>This is an about page</h1>

    <RouterLink
      v-for="product in allProducts"
      :key="product.name"
      :to="`/details/${product.name}`"
    >
      <br />
      <h4>{{ product.name }}</h4>
      <br />
    </RouterLink>
    <input placeholder='Nombre' v-model="name" type="text" name="Name" id="newProduct" />
    <input placeholder="color" v-model="color" type="text" name="Color" id="Color" />
    <button  @click="(e) => createNewProduct()">Crear Nuevo</button>
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
