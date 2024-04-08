<script>
import axios from 'axios';
const defaultUrl = 'http://localhost:8000/api/words/'
  export default {
    name: 'WordDetailPage',
    data() {
      return {
        word: null
      }
    },
    methods: {
      fetchWord(){
        axios.get(defaultUrl + this.$route.params.id)
        .then((res) => {
          this.word = res.data
        })
      }
    },
    created() {
      this.fetchWord()
    }
  }
</script>

<template>
  <div class="card  mb-3">
    <div v-if="word" class="card-body">
      <h5 class="card-title">{{ word.term }}</h5>
      <p class="card-text">{{ word.definition }}</p>
      <button @click="$router.back()" class="btn btn-primary">Torna indietro</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.card-title {
  text-transform: capitalize;
}
</style>