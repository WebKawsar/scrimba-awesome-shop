<template>
    <v-container>
        <v-row>
            <v-col sm="8" md="5" offset-md="2" lg="5" offset-lg="2">
                <ProductsList />
            </v-col>
            <v-col sm="4" md="4" lg="4" order="first" order-sm="last">
                <checkoutBox />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProductsList from "../components/cart/ProductsList"
import checkoutBox from "../components/cart/checkoutBox"
    export default {
        components: {
            ProductsList,
            checkoutBox
        }
    }
</script>

<style lang="scss" scoped>

</style>