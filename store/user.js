export default {
    actions: {
        async regUser({ }, regData) {
            return await this.$api_ecommerce_auth.post('users/', regData).then(response => {
                return response
            }).catch((error) => {
                return error.response
            })
        },
        async login(_, loginData) {
            return await this.$api_ecommerce_auth.post('token/login', loginData).then(response => {
                if (response.status == 200) {
                    localStorage.setItem('accessToken', response.data.auth_token);
                    return response;
                }
            }).catch((error) => {
                localStorage.setItem('accessToken', '');
                return error.response;
            })
        },
        async logout({dispatch}){
            return await this.$api_ecommerce_auth.post('token/logout').then(response => {
                if (response.status == 204){
                    localStorage.setItem('accessToken', '');
                    dispatch('setToken');
                    return response;
                }
            })
        },
        async setToken({ commit }) {
            let token = localStorage.getItem('accessToken');
            if (token) {
                this.$api_ecommerce_auth.setHeader('Authorization', `Token ${token}`);
                this.$api_ecommerce_vdk.setHeader('Authorization', `Token ${token}`);
                await this.$api_ecommerce_auth.get('users/me').then(response => {
                    if (response.status === 200) {
                        commit('updateLogStatus', true);
                        commit('updateUserData', response.data);
                    }
                }).catch(() => { 
                    localStorage.setItem('accessToken', '');
                 });
            }
        }
    },
    mutations: {
        updateLogStatus(state, value) {
            state.logStatus = value;
        },
        updateUserData(state, userData) {
            state.userData = userData;
        }
    },
    state() {
        return {
            logStatus: false,
            userData: {}
        }
    },
    getters: {
        getFirstNameAndLastName(state) {
            if (state.logStatus) {
                return `${state.userData.first_name} ${state.userData.last_name}`
            } else { return '' }
        },
        getLogStatus(state) {
            return state.logStatus;
        },
        getUserData(state){
            return state.userData;
        }
    }
}