<script>
    export default {
        data() {
            return {
                logoImage: 'boolean-logo.png',

                links: [
                    {
                        url: 'Uomo',
                    },
                    {
                        url: 'Donna',
                    },
                    {
                        url: 'Bambino',
                    }
                ],

                icons: [
                    {
                        iconName: 'fa-regular fa-user',
                    },
                    {
                        iconName: 'fa-regular fa-heart',
                    },
                    {
                        iconName: 'fa-solid fa-bag-shopping',
                    },
                ],

            };
        },

        methods: {
            logoPath(logoName) {
                const logoUrl = new URL("../assets/img/" + logoName, import.meta.url);
                return logoUrl.href;
            },
        }
    }
</script>

<template>
    <header class="header-container">

        <nav class="header-nav">
            <div class="catalog-box">
                <div v-for="link in links">
                    <a href="#">{{ link.url }}</a>
                </div>
            </div>

            <div class="header-logo">
                <img :src="logoPath(logoImage)" alt="Logo Boolean">
            </div>

            <div class="header-profile">
                <div v-for="icon in icons">
                    <a href="#"><i :class="icon.iconName"></i></a>
                </div>
            </div>
        </nav>

    </header>
</template>

<style></style>