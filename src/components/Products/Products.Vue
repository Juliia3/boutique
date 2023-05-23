<script setup>
import './products.scss'
</script>

<template>
    <div class="products">
        <div class="products__container container">
            <img class="products__line line" src="@/assets/img/line.svg" alt="line" />
            <h2 class="products__title">Products</h2>
            <div class="products__select">
              <button @click="setCategory()" class="products__button">All</button>
              <button @click="setCategory('men\'s clothing')" class="products__button">Men's clothing</button>
              <button @click="setCategory('women\'s clothing')" class="products__button">Women's clothing</button>
              <button @click="setCategory('jewelery')" class="products__button">Jewelery</button>
              <button @click="setCategory('electronics')" class="products__button">Electronics</button>
            </div>
            <div class="products__card-block">
                <div class="products__card" v-for="p in posts" :key="p.id">
                    <p class="products__card-category">{{ p.category }}</p>
                    <img class="products__card-img" :src="p.image" />
                    <!-- <p class="products__card-img">{{ p.image }}</p> -->
                    <div class="products__card-name">
                      <RouterLink :to="'/card/' + p.id"><h2 class="products__card-title">{{ p.title }}</h2></RouterLink>
                        <p class="products__card-price">{{ p.price }}$</p>
                    </div>
                    <div class="products__card-description-box">
                      <button @click="togglePost(p.id)" class="products__card-button">Read more</button>
                      <p 
                      class="products__card-description"
                      v-if="visibleId === p.id"
                      >{{ p.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      visibleId: false
    }
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    togglePost(id) {
      this.visibleId = id === this.visibleId ? null : id
    },
    setCategory(category) {
      console.log(category);
      this.fetchPosts(category)
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>
