<script>
import axios from 'axios';
import WordCard from '../words/WordCard.vue';
const defaultUrl = 'http://localhost:8000/api/words/'
  export default {
    name: 'WordDetailPage',
    components: {WordCard},
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
  <!-- <div class="card  mb-3">
    <div v-if="word" class="card-body">
      <h5 class="card-title">{{ word.term }}</h5>
      <p class="card-text">{{ word.definition }}</p>
      <button @click="$router.back()" class="btn btn-primary">Torna indietro</button>
    </div>
  </div> -->
  <h1 class="mb-3 text-center">{{ word.term }}</h1>
  <div class="card d-flex flex-column justify-content-between">
    <div>
      <h4>Definizione:</h4>
      <p>{{ word.definition }}</p>


    </div>
      <button @click="$router.back()" class="btn btn-secondary align-self-center">
        Torna indietro</button>

  </div>

</template>

<style lang='scss' scoped>
.card-title {
  text-transform: capitalize;
}
@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");

* {
  // padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  user-select: none;
}

.card {
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  // width: 400px;
  height: 220px;
  background-color: #ffffff;
  padding: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: 0.6s ease-in;
  margin-bottom: 1rem;
}



.card p {
  padding: 10px 0;
}
</style>