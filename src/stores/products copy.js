import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ['juguete', 'fruta', 'casa']

  const getProducts = computed(() =>  products)

  function newProduct(product) {
    products.push(product)
    console.log(products)
  }

  function getSingleProduct(id) {
    products.filter((product)=> product == id)
  }

  return { products, getProducts, newProduct, getSingleProduct }
})
