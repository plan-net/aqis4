// import { SAVING_START } from '@/store/types'
// import store from '@/store'
// mock
// import './mock.js'
// import saAxios from './axios.mock.instance'
// import { clone } from 'core4ui/core4/helper'
import axios from 'axios'

const ApiService = {
  query (resource, params) {
  }
}

const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ` + JSON.parse(window.localStorage.user).token }
})

export const ClientsService = {
  testRequest (name) {
    // It is possible to use https://cors-anywhere.herokuapp.com/ for solving CORS issues but it is not secure!
    //      e.g.  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.google.com?q=blabla', true);
    //
    // No possibility to trust the response and there is no certainty
    // that they (cors-anywhere.herokuapp.com) do not collect api responses

    const url = name ? `/test?name=${name}` : `/test`

    return axiosInstance
      .get(url)
      .then(result => result.data)
      .catch(error => Promise.reject(error))
  },
  uniqueClientName (name, notId) {
    // return axiosInstance
    //   .get(url)
    //   .then(result => result.data)
    //   .catch(error => Promise.reject(error))
  }
}

export default ApiService
