<script>
  import { useProductsStore } from "../stores/products";
  import { mapStores } from "pinia";

export default {
  data() {
    return {
      keyword: '',
      genre: 'All'
    }
  },
  props: {
    msg: String
  },
  methods: {
    setFilter(key, value) {
      console.log('applying filters???')
      this.productsStore.applyFilter(key, value)
    }
  },
  computed: {
    ...mapStores(useProductsStore),
    getGenres() {
      return this.productsStore.getAllGenres
    }
  },
}
</script>

<template>
  <div class="greetings">
    <h3>Filtros:</h3>
    <label for="keyword">Search by Keyword</label>
    <input type="text" name="keyword" id="keyword" v-model="keyword" @change="() => setFilter('keyword', keyword)">
    <br/>
    
    
    <label for="genero">Generos</label>


    <select name="genero" id="genero" v-model="genre" @change="() => setFilter('genre', genre)">
      <option v-for="genre in getGenres" :key="genre" :value="genre">{{genre}}</option>
    </select>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
