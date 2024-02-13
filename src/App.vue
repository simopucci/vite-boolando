<script>
  import { store } from './store';

  import axios from 'axios';

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppModal from './components/AppModal.vue';

  export default {
    data() {
      return {
        store,
        
        products: [],

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

    components: { AppHeader, AppMain, AppModal },

    created() {
      axios.get(`${store.apiUrl}/products`).then((res) => {
        this.products = res.data;
      });
    },
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

  <AppModal 
    v-if="store.modal.active">
  </AppModal>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
