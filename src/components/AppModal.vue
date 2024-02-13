<script>
  import { store } from '../store';


    export default {
        data() {
            return {
                store,
            };
        },

        props: {
            card: Object
        },

        methods: {
            closeModal() {
                store.modal.active = false;
            },
           
            generateUrl(path) {
                return new URL(path, import.meta.url).href;
            },
        }
    }
</script>


<template>
    <div class="layover">
        <div class="modale">
            <div class="card d-flex flex-row">
                <div>
                    <img :src="generateUrl(store.modal.img)" class="card-img-top" alt="...">
                </div>
                <div class="card-body d-flex flex-column justify-content-center">
                    <h6>Brand: <span class="title-name">{{ store.modal.brand }}</span></h6>
                    <h6 class="card-title">Nome prodotto: <span class="title-name">{{ store.modal.name }}</span></h6>
                    <p class="card-text">Prezzo: <span class="price title-name">{{ store.modal.price }}</span></p>
                    <button class="btn btn-secondary" @click="closeModal()">Chiudi</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .modale {
        max-width: 800px;
        background-color: rgb(54, 54, 54);
        padding: 10px;
    }

    img {
        width: 300px;
    }

    .price {
        color: red;
        font-weight: bold
    }

    .title-name {
        font-size: 1.3rem;
        font-weight: bold;
    }
</style>