import Vue from 'vue'
import Vuex from 'vuex'
import FakeData from "../FakeData"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: FakeData,
        snackbar: {
            show: false,
            variant: "success",
            message: "Success! Item added to cart"
        },
        cart: []
    },
    mutations: {
        addItemToCart(state, payload){
            const { itemId, quantity } = payload;
            const idx = state.cart.findIndex(product => {
                return product.itemId === itemId
            })

            if(idx === -1){
                state.cart.push({ itemId, quantity})
            } else {
                state.cart[idx].quantity += 1
            }

        },
        updateSnackbar(state, payload){
            const { show } = payload;
            state.snackbar.show = show;
        }
    }
})

export default store;