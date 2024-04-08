<script>
export default {
    name: 'NotFoundPage',
}
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center">

        <h3>404 | Page Not Found</h3>
        <div>
            <button class="btn btn-primary" @click="$router.back()">Torna indietro</button>
        </div>
    </div>

</template>

<style lang='scss' scoped>
/* style here */
</style>