import { observable, action } from 'mobx'
import { RestClient } from '../helpers/RestClientHelper'
import Services from '../services/Service'

const Client = new RestClient()

const ob = observable({
    forecastList: [],
    visible: false
})

const actions = {
    getApi: action( (param) => {
        Client.call(Services.getApi, {}, param)
          .then(res => {
                Store.ob.forecastList = res.data.data;
          })
          .catch(() => {
          })
      })
}

const Store = {
    ob,
    actions
}

export default Store