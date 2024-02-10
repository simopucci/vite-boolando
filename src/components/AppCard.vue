<script>
    export default {
        props: {
            card: Object
        },

        methods: {
            generateUrl(path) {
                return new URL(path, import.meta.url).href;
            },
        },
    }
</script>

<template>
    <div class="card">

        <div class="card-img">
            <img :src="generateUrl(card.frontImage)" alt="front image" class="front-img">
            <img :src="generateUrl(card.backImage)" alt="back image" class="back-img">
        </div>

        <div class="badge-container">
            <div v-for="badge in card.badges"></div>
        </div>

        <!-- <div class="favourite">&hearts;</div> -->

        <!-- <div class="label">
            <span class="sales">-50%</span>
            <span class="sustainability">Sostenibilità</span>
        </div> -->

        <!-- <div class="container__name">
            <span>Levi's</span>
            <div class="product__name">RELAXED FIT TEE UNISEX</div>
            <span class="price">14,99 €</span><span class="cancelled">29,99 €</span>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: calc((100% / 3) - 15px);
        display: flex;
        flex-direction: column;


        .card-img {
            position: relative;

            .front-img, .back-img {
                width: 100%;
            }

            .back-img {
                display: none;
            }

            &:hover .back-img {
                display: block;
            }

            &:hover .front-img {
                display: none;
            }
        }
    }
</style>