import RESTClient from "../libs/RESTClient"
import MethodType from "../libs/MethodType"

export default class Kirari {
  constructor () {
    this.client = new RESTClient()
  }
  fetchThread(threadName) {
    return this.client.request("/api/thread.json", MethodType.GET, {q: threadName}, {})
  }
}
