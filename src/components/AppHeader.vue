<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/">Glossario</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Home</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang='scss' scoped>
/* style here */
</style>