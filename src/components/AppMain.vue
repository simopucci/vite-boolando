<script>
    import { store } from '../store';
    import AppCard from './AppCard.vue';

    export default {


      
        props: {
            products: Array
        },

        components: { AppCard },

        methods: {
            handleCardOpen(productIndex) {
           
                store.modal.img = this.products[productIndex].frontImage;
                store.modal.brand = this.products[productIndex].brand;
                store.modal.name = this.products[productIndex].name;
                store.modal.price = this.products[productIndex].price;
                
                store.modal.active = true;
            }
        }
    }
</script>

<template>
    <main class="d-flex">
        <div class="container d-flex py-5">
            <AppCard 
                v-for="(product, index) in products"
                @card-open="handleCardOpen"
                :card="product"
                :index="index">
            </AppCard>
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