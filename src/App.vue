<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            frontImage: '../assets/img/1.webp',
            backImage: '../assets/img/1b.webp',
            brand: "Levi's",
            name: 'Relaxed fit tee unisex',
            price: '14.99 €',
            originalPrice: '29.99 €',
            isInFavorites: false,
            badges: [
              {
                type: 'discount',
                value: '-50%',
              },
              {
                type: 'tag',
                value: 'Sostenibilità',
              },
            ],
          },
          {
            id: 2,
            frontImage: '../assets/img/2.webp',
            backImage: '../assets/img/2b.webp',
            brand: 'Guess',
            name: 'Roses Tee',
            price: '20.99 €',
            originalPrice: '29.99 €',
            isInFavorites: true,
            badges: [
              {
                type: 'discount',
                value: '-30%',
              },
            ],
          },
          {
            id: 3,
            frontImage: '../assets/img/3.webp',
            backImage: '../assets/img/3b.webp',
            brand: 'Come Zucchero Filato',
            name: 'Voglia di colori pastello',
            price: '129.99 €',
            originalPrice: '184.99 €',
            isInFavorites: false,
            badges: [
              {
                type: 'discount',
                value: '-30%',
              },
            ],
          },
          {
            id: 4,
            frontImage: '../assets/img/4.webp',
            backImage: '../assets/img/4b.webp',
            brand: "Levi's",
            name: 'Tee Unisex',
            price: '14.99 €',
            originalPrice: '29.99 €',
            isInFavorites: false,
            badges: [
              {
                type: 'discount',
                value: '-50%',
              },
              {
                type: 'tag',
                value: 'Sostenibilità',
              },
            ],
          },
          {
            id: 5,
            frontImage: '../assets/img/5.webp',
            backImage: '../assets/img/5b.webp',
            brand: 'Maya Deluxe',
            name: 'Stripe Bodice',
            price: 99.99,
            isInFavorites: true,
            badges: [
              
            ],
          },
          {
            id: 6,
            frontImage: '../assets/img/6.webp',
            backImage: '../assets/img/6b.webp',
            brand: 'Esprit',
            name: 'Maglione - Black',
            price: 29.99,
            isInFavorites: true,
            badges: [
              {
                type: 'tag',
                value: 'Sostenibilità',
              },
            ],
          },
        ],

        headerItems: {

          headerLinks: [
            {
                text: 'Uomo',
                url: '#'
            },
            {
                text: 'Donna',
                url: '#'
            },
            {
                text: 'Bambino',
                url: '#'
            }
          ],

          headerIcons: [
            {
                text: 'fa-regular fa-user',
                url: '#'
            },
            {
                text: 'fa-regular fa-heart',
                url: '#'
            },
            {
                text: 'fa-solid fa-bag-shopping',
                url: '#'
            },
          ],

          logo: "../assets/img/boolean-logo.png"
        },


      };
    },

    components: { AppHeader, AppMain, AppFooter }, 
  };
</script>

<template>
  <AppHeader
  :headerLinks="headerItems.headerLinks"
  :headerIcons="headerItems.headerIcons"
  :logoPath="headerItems.logo">
  </AppHeader>

  <AppMain 
  :products="products">
  </AppMain>

  <AppFooter>
  </AppFooter>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
