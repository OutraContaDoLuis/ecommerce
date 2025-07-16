<template>
    <div>
        <NavBar></NavBar>
        <h2 class="pb-2 border-bottom">Lojas</h2>
        <div id="shops">

        </div>
        <h2 class="pb-2 border-bottom">Produtos</h2>
        <div id="products">

        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { getAllProducts, getAllShops } from '../requestProductsApi.js';

export default {
    name: 'HomePage',
    data() {
        return {
            loadedShops: false,
            loadedProducts: false,
            shops: [],
            products: []
        }
    },
    components: {
        NavBar
    },
    mounted() {
        this.initialLoadShops()
        this.initialLoadProducts()
    },
    methods: {
        async initialLoadShops() {
            this.loadComponent('shops')

            try {
                
                const products = await getAllShops()

                console.log(products.code)

                if (products.code == 'ERR_NETWORK') {
                    console.log('Sem net bebe')
                    this.errorComponent('shops')
                }

            } catch (error) {
                console.log(error)
            }

        },
        async initialLoadProducts() {
            this.loadComponent('products')

            try {

                const products = await getAllProducts()

                console.log(products.code)

                if (products.code == 'ERR_NETWORK') {
                    console.log('Sem net bebe')
                    this.errorComponent('products')
                }

            } catch (error) {
                console.log(error)
            }
        },
        loadComponent(elementId) {
            const element = document.getElementById(elementId)
            element.innerHTML = [
                '<p>Carregando...</p>'
            ].join('')
        },
        errorComponent(elementId) {
            const element = document.getElementById(elementId)
            element.innerHTML = [
                '<p>Deu erro aqui paizao</p>'
            ].join('')
        }
    }
}

</script>