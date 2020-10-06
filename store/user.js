export default {
    actions: {
        async testAxios(){
            // localStorage.setItem('userToken', '')
            let data = {
                email: 'savvvik.yan@yandex.ru',
                password: 'AprilMay9779'
            }
            console.log(data);
            // await this.$api_ecommerce_auth.$post('token/login', data).then((resp)=>{
            //     console.log(resp)
            // });
            await this.$api_ecommerce_auth.$get('restricted').then((resp)=>{
                console.log(resp)
            });
        }
    },
    mutations: {},
    state() { return {} },
    getters: {}
}