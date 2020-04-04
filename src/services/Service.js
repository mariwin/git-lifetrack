import { Endpoint, Request } from '../helpers/RestClientHelper'

const Service = {
    getApi: Endpoint(Request.POST, 'http://localhost/api'),
}
  
export default Service