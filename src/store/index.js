import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'http://localhost:3000',

    modal: {
        active: false,
        img: '',
        brand: '',
        name: '',
        price: '',
    }
});