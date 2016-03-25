import RESTClient from "../libs/RESTClient"
import MethodType from "../libs/MethodType"

import Thread from "../models/Thread"
import Comment from "../models/Comment"

export default class Kirari {
  constructor () {
    this.client = new RESTClient()
  }
  fetchThread(threadName) {
    return this.client.request("/api/thread.json", MethodType.GET, {q: threadName}, {}).then((res) => {
      let thread = new Thread(threadName)
      const comments = res.body["results"]
      // check strictly
      comments.map((obj) => { thread.addComment(new Comment(obj)) })
      return thread
    })
  }
}
