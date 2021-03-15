<template>
    <v-container>
        <v-row>
            <v-col md="3" offset-lg="1">
                <Sidebar />
            </v-col>
            <v-col md="9" lg="7">
                <ProductsDisplay />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ProductsDisplay from "../components/store/ProductsDisplay"
import Sidebar from "../components/store/Sidebar"

    export default {
        components: {
            ProductsDisplay,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>

</style>