<script setup>
import './card.scss'
</script>

<template>
    <div class="card">
        <div class="card__container">
            <div class="card__block"
            v-if="post">
            <h2 class="card__title">{{ post.title }}</h2>
            <div class="card__info-block">
              <div>
                <img class="card__img" :src="post.image" />
                <p class="card__price">{{ post.price }}$</p>
              </div>
              <div class="card__description-box">
                <p class="card__category">{{ post.category }}</p>
                <p class="card__description">{{ post.description }}</p>
              </div>
            </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    }
  },
  methods: {
    getPost() {
      const url = 'https://fakestoreapi.com/products/' + this.$route.params.id
        fetch(url)
            .then(res=>res.json())
            .then(json=>this.post = json)
    }, 
  },
  mounted() {
    this.getPost()
  }
}
</script>