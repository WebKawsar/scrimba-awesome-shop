<template>
    <div class="mt-3">
        <v-row
            v-for="product in $store.state.products"
            :key="product.name"
        >
            <HorizontalProduct 
                :product="product"
                btnAction="remove"
            />
        </v-row>
    </div>
</template>

<script>
import HorizontalProduct from "../card/HorizontalProduct"
    export default {
        components: {
            HorizontalProduct
        }
    }
</script>

<style lang="scss" scoped>

</style>