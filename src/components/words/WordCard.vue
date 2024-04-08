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
    <!-- <div class="col-4">

        <div class="card text-center mb-3">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">{{ word.term }}</h5>
                    <p class="card-text">{{ abstract }}</p>
                </div>
                <routerLink :to="{name: 'word-detail', params: {id: word.id}}" class="btn btn-primary align-self-center">Vedi dettaglio</routerLink>
            </div>
        </div>
    </div> -->

    <div class="col-4">

        <div class="card">
            <h4>{{ word.term }}</h4>
            <p>{{ abstract }}</p>
            <routerLink :to="{ name: 'word-detail', params: { id: word.id } }" class="btn btn-secondary align-self-center">
                Vedi dettaglio</routerLink>
                
            </div>
        </div>
</template>

<style lang='scss' scoped>
.card {
    height: 200px;
    cursor: pointer;
}
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
    width: 400px;
    height: 220px;
    background-color: #ffffff;
    padding: 20px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    transition: 0.6s ease-in;
    margin-bottom: 1rem;
}

.card::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0px;
    right: -15px;
    background: #528fb3;
    height: 220px;
    width: 25px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
}

.card:hover::before {
    transition-delay: 0.2s;

    transform: scale(40);
}

.card:hover {
    color: #ffffff;

}

.card p {
    padding: 10px 0;
}
</style>