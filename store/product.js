export default {
    actions: {
        async fetchProduct({ commit }){
            commit('updateLoadingStatus', true);
            await this.$api_ecommerce_v2.$get(`product/${this.$router.currentRoute.params.uuid}`).then(product=>{
                commit('updateCurrentProduct', product);
            })
            commit('updateLoadingStatus', false);
        }
    },
    mutations: {
        updateCurrentProduct(state, product){
            state.currentProduct.obj = product;
        },
        updateLoadingStatus(state, status){
            state.productIsLoading = status;
        }
    },
    state() {
        return {
            currentProduct: {
                uuid: '',
                obj: {
                    files:{
                        images: []
                    }
                }
            },
            productIsLoading: false
        }
    },
    getters: {
        product(state){
            return state.currentProduct.obj;
        },
        loadingStatus(state){
            return state.productIsLoading;
        }
    }
}