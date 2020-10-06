import ApiSettings from '@/store/ApiSettings'

export default ({ $axios }, inject) => {

  // here we set api's name and route 
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

    // here we create custom api shortcut
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
          Authorization: `Token ${'483e62a3d46fbda43eaf3267dea62e211ec3ede9'}`
        }
      }
    })

    api.setBaseURL(apiObject.baseRoute)
    inject(apiObject.name, api)
  }
}