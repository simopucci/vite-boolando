<script>
    export default {
        props: {
            headerLinks: Array,
            headerIcons: Array,
            logoPath: String,
        },
        
        methods: {
            generatePath(path) {
                return new URL(path, import.meta.url).href;
            },
        },
    };
</script>

<template>
    <header class="header-container">

        <nav class="header-nav">
            <div class="catalog-box">
                <div v-for="link in headerLinks">
                    <a :href="link.url">{{ link.text }}</a>
                </div>
            </div>

            <div class="header-logo">
                <img :src="generatePath(logoPath)" alt="Logo Boolando">
            </div>

            <div class="header-profile">
                <div v-for="icon in headerIcons">
                    <a :href="icon.url"><i :class="icon.text"></i></a>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .header-container {
        height: $header-height;
        background-color: #FF6900;
        box-shadow: 2px 0 5px black;

        .header-nav {
            width: 70%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .catalog-box {
                min-width: $header-min-width;
                display: flex;
            }

            .header-logo {
                min-width: $header-min-width;
                text-align: center;
                cursor: pointer;

                img {
                    height: 30px;
                }
            }

            .header-profile {
                min-width: $header-min-width;
                display: flex;
                justify-content: end;
            }
        }
    }
</style>