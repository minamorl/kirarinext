import 'whatwg-fetch'
import qs from 'qs'


export default class Kirari {
  constructor () {
  }
  fetchThread(threadName, from=null) {
    if(from !== null) {
      return fetch("/api/comments?" + qs.stringify({q: threadName, from: from})).then((response) => {
        return response.json()
      })
    }
    return fetch("/api/comments?" + qs.stringify({q: threadName})).then((response) => {
      return response.json()
    })
  }
  comment(body) {
    return fetch("/api/comments", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: body
      })
    }).then((response) => {
      return response.json()
    })
  }
}
