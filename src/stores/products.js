import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({ products: ['juguete', 'fruta', 'casa'] }),
    getters: {
        getProducts: (state) => [...state.products],
    },
    actions: {
        newProduct(product) {
            this.products.push(product)
        },
    },
})