<template>
    <v-container class="mb-14">
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <h2>Popular Products <v-btn color="primary" small to="/store" text>View All</v-btn></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                sm="10" 
                offset-sm="1" 
                lg="8" 
                offset-lg="2"
            >
                <v-row>
                    <v-col 
                        sm="6" 
                        md="4" 
                        v-for="(product, index) in $store.state.products.slice(0, 3)" 
                        :key="index"
                    >
                        <Card :product="product" :addToCart="addToCart" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Card from "../card"
    export default {
        data() {
            return {

            }
        },
        methods: {
            addToCart(index, quantity){
                this.$store.commit("addItemToCart", { itemId: index, quantity })
                this.$store.commit("updateSnackbar", { show: true })
            }
        },
        components: {
            Card
        },
       
    }
</script>

<style lang="scss" scoped>

</style>