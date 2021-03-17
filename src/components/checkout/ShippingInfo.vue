<template>
    <v-stepper-content step="2">
        <v-text-field
            v-model="data.street"
            :rules="[rules.required]"
            label="Street Address"
            required
        />
        <v-text-field
            v-model="data.state"
            :rules="[rules.required]"
            label="State"
            required
        />
        <v-text-field
            v-model="data.zip"
            :rules="[rules.required, rules.zip]"
            label="Zip code"
            required
        />
        <v-btn color="primary" @click="next">
            Continue
        </v-btn>
        <v-btn text @click="previous">
            Go Back
        </v-btn>
    </v-stepper-content>
</template>

<script>
    export default {
        props: {
            next: Function,
            previous: Function,
            rules: Object,
            data: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>