<script>
import axios from 'axios';
import WordCard from '../words/WordCard.vue';
const defaultUrl = 'http://localhost:8000/api/words/'
  export default {
    name: 'HomePage',
    components: {WordCard},
    data() {
        return {
            words: []
        }
    },
    methods: {
        fetchWords() {
            axios.get(defaultUrl).then(res => {
                this.words = res.data
            })
        }
    },
    created() {
        this.fetchWords();
    }
  }
</script>

<template>
    <div class="row">

            <WordCard v-for="word in words" :word="word"/> 
    </div>
</template>

<style lang='scss' scoped>
  /* style here */
</style>