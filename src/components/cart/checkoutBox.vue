<template>
    <div>
        <v-card outlined>
            <v-card-title>Payment Details</v-card-title>
            <v-card-text>
                <v-text-field label="Name" />
                <v-text-field label="Email" />

                <p>Total: $999</p>
                <v-btn color="primary" @click="goToCheckout">
                    Checkout
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        methods: {
            goToCheckout() {

                console.log("Checkout");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>