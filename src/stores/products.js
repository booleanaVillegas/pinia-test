import { defineStore } from "pinia";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [
            { name: "computador", color: 'pink', },
            { name: "fruta", color: 'red' },
            { name: "casa", color: 'blue' }
        ],
        localStorageProducts: []
    }),
    getters: {
        getProducts: (state) => [...state.products],
    },
    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product)
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts))
        },
        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'))
            this.products = this.products.concat([...this.localStorageProducts])
        },
        getProductById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.name.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
    },
});