<script>
import axios from 'axios'
const defaultUrl = 'http://localhost:8000/api/words/'
  export default {
    name: 'HomePage',
    data() {
        return {
            words: []
        }
    },
    methods: {
        fetchWords() {
            axios.get(defaultUrl).then(res => {
                console.log(res.data)
            })
            
            
               
        }
    },
    created() {
        this.fetchWords();
    }
  }
</script>

<template>
  <h1>ciao</h1>
</template>

<style lang='scss' scoped>
  /* style here */
</style>