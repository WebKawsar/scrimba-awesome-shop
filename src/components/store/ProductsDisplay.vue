<template>
    <div>
        <h3>Products</h3>
        <v-row>
            <v-col sm="6" md="4" v-for="product in $store.state.products" :key="product.name">
                <Card :product="product" :addToCart="addToCart" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Card from "../card"

    export default {
        components: {
            Card
        },
        methods: {
            addToCart(index, quantity){
                this.$store.commit("addItemToCart", { itemId: index, quantity })
                this.$store.commit("updateSnackbar", { show: true })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>