<script>
    import AppCard from './AppCard.vue';

    export default {
        props: {
            products: Array
        },

        components: { AppCard },

    }
</script>

<template>
    <main class="d-flex">
        <div class="container d-flex py-5">
            <AppCard v-for="product in products" :card="product"></AppCard>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    main {
        justify-content: center;
        align-items: center;

        .container {
            gap: 15px;
            flex-wrap: wrap;
        }
    }
</style>