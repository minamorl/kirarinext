import RESTClient from "../libs/RESTClient"
import MethodType from "../libs/MethodType"

export default class Kirari {
  constructor () {
    this.client = new RESTClient()
  }
  fetchThread(threadName, from=null) {
    if(from !== null) {
      return this.client.request("/api/comments.json", MethodType.GET
        , {q: threadName, from: from}, {})
    }
    return this.client.request("/api/comments.json", MethodType.GET, {q: threadName}, {})
  }
  comment(body) {
    return this.client.request("/api/comments.json", MethodType.POST, {}, {
      body: body
    })
  }
}
