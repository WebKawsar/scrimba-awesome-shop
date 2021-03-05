<template>
    <div>
        <Header />
        <PopularProducts />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/home/Footer.vue'
import Header from "../components/home/Header"
import PopularProducts from '../components/home/PopularProducts.vue'


    export default {
        components: {
            Header,
            Footer,
            PopularProducts
        }
    }
</script>

<style lang="scss" scoped>

</style>