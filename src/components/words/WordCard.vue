<script>
  export default {
    name: 'WordCard',
    props: {word : Object},
    computed: {
        abstract() {
            if (this.word.definition.length < 100) {
                return this.word.definition
            } else {
                const abstract = this.word.definition.slice(0,100) 
                return abstract + '...'
            }
        }
    }
  }
</script>

<template>
    <div class="col-4">

        <div class="card text-center mb-3">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">{{ word.term }}</h5>
                    <p class="card-text">{{ abstract }}</p>
                </div>
                <routerLink :to="{name: 'word-detail', params: {id: word.id}}" class="btn btn-primary align-self-center">Vedi dettaglio</routerLink>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.card {
    height: 200px;
}
.card-title {
text-transform: capitalize;
}
</style>