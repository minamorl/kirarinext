import request from 'superagent'
import MethodType from './MethodType'

export default class RESTClient {
  constructor() {
    this[Symbol.for("endpoints")] = {}
  }
  get endpoints() {
    return Object.freeze(this[Symbol.for("endpoints")])
  }
  request(url, method, query={}, params={}) {
    // Type Checking 
    if (!(typeof url === 'string' || url instanceof String)) {
      throw TypeError("url must be instance of String")
    }
    if (!(method instanceof MethodType)) {
      throw TypeError("method must be instance of MethodType")
    }
    return new Promise((resolve, reject) => {
      request(method.name, url)
        .query(query)
        .send(params)
        .end((err, res) => {
          if (err !== null) reject(err)
          resolve(res)
        })
    })
  }
  defineEndpoint({name, url}) {
    if(name === undefined || url === undefined)
      throw TypeError("defineEndpoint must be given 2 arguments: url, name")
    
    this[Symbol.for("endpoints")][name] = (method) => {
      return this.request(url, method)
    }
  }
}