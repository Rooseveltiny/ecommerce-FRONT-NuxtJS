import ApiSettings from '@/store/ApiSettings'

export default ({ $axios }, inject) => {

  let allApi = [
    {
      name: 'api_ecommerce_vdk',
      baseRoute: ApiSettings.BASE_ROUTE
    },
    {
      name: 'api_ecommerce_auth',
      baseRoute: ApiSettings.AUTH_ROUTE
    }
  ]

  for (let apiObject of allApi){

    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
        }
      }
    })

    api.setBaseURL(apiObject.baseRoute)
    inject(apiObject.name, api)
  }
}