<script>
    export default {
        props: {
            card: Object,
            index: Number
        },

        methods: {
            generateUrl(path) {
                return new URL(path, import.meta.url).href;
            },
        },

        emits: ['card-open'],
    }
</script>

<template>
    <div class="card" @click="$emit('card-open', index)">

        <div class="card-img">
            <img :src="generateUrl(card.frontImage)" alt="front image" class="front-img">
            <img :src="generateUrl(card.backImage)" alt="back image" class="back-img">
        </div>

        <div class="heart-container">
            <i class="fa-solid fa-heart" :class="card.isInFavorites ? 'red-heart' : ''"></i>
        </div>

        <div class="badge-container d-flex">
            <div v-for="badge in card.badges" class="badge" :class="badge.type">
                {{ badge.value }}
            </div>
        </div>

        <div class="card-info">
            <div class="card-brand">{{ card.brand }}</div>
            <div class="card-name">{{ card.name }}</div>
            <span class="current-price">{{ card.price }}</span>
            <span class="original-price">{{ card.originalPrice }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: calc((100% / 3) - 15px);

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
        
        .heart-container {
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            right: 0;

            background-color: white;
        }

        .red-heart {
            color: red;
        }

        .badge-container {
            position: absolute;
            left: 0;
            bottom: 120px;
            gap: 5px;

            .discount {
                background-color: red;
            }

            .tag {
                background-color: green;
            }
        }

        .card-brand {
            font-size: .7rem;
        }

        .card-name {
            font-weight: bold;
        }

        .current-price {
            font-size: .8rem;
            color: red;
            font-weight: bold;
            margin-right: 7px;
        }

        .original-price {
            font-size: .8rem;
            text-decoration: line-through;
        }
    }
</style>