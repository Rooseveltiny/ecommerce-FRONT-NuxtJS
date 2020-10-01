import ApiSettings from './ApiSettings';

export default {
    actions: {
        async fetchProduct({ commit }){
            const res = await fetch(`${ApiSettings.BASE_ROUTE}/product/${this.$router.currentRoute.params.uuid}`);
            const product = await res.json();
            commit('updateCurrentProduct', product);
        }
    },
    mutations: {
        updateCurrentProduct(state, product){
            state.currentProduct.obj = product;
        }
    },
    state() {
        return {
            currentProduct: {
                uuid: '',
                obj: {}
            }
        }
    },
    getters: {
        product(state){
            return state.currentProduct.obj
        }
    }
}