import React, {Component} from "react"

import Kirari from "../services/Kirari"

const CommentComponent = (props) => {
  return <li>
    <div className="comment-body">{props.comment.body}</div>
    <div className="comment-id">#{props.comment.id}</div>
    <div className="comment-author-name">{props.comment.author.name}</div>
  </li>
}
const ThreadHeader = (props) => {
  return <div>
    <h1>kirarich@next</h1>
    <p> There are {props.count} comments in this thread. </p>
  </div>
}
const ThreadList = (props) => {
  return <ul className="thread">
    {props.comments.map((comment, index) => {
      return <CommentComponent comment={comment} key={index} />
    })}
  </ul>
}
const CommentForm = (props) => {
  const post = (e) => {
    let client = new Kirari()
    const body = document.getElementById("comment-form").value
    document.getElementById("comment-form").value = ""
    client.comment(body).then(() => {
      props.refresh()
    })
    e.preventDefault()
  }
  return <form onSubmit={post}>
    <textarea id="comment-form" maxLength="1000" />
    <button type="submit">submit</button>
  </form>
}
export default class ThreadComponent extends Component { 
  constructor(props) {
    super(props)
    this.client = new Kirari()
    this.render = this.render.bind(this)
    this.refresh = this.refresh.bind(this)
    this.props = props
    this.state = {
      name: this.props.name,
      comments: []
    }
    this.sem = require("semaphore")(1)
  }
  componentDidMount () {
    this.refresh(false)
    setInterval(this.refresh, 2000)
  }
  refresh(diffonly=true) {
    this.sem.take(() => {
      if(diffonly) {
        const last_fetched_id = this.state.comments[this.state.comments.length - 1]["id"]
        this.client.fetchThread(this.props.name, last_fetched_id).then((res) => {
          const comments = res.body["results"]
          this.setState({
            comments: [...this.state.comments, ...comments]
          })
          this.sem.leave()
        })
      } else {
        this.client.fetchThread(this.props.name).then((res) => {
          const comments = res.body["results"]
          this.setState({
            comments: comments
          })
          this.sem.leave()
        })
      }
    })
  }
  render() {
    return <div>
      <ThreadHeader name={this.state.name} count={this.state.comments.length} />
      <ThreadList comments={this.state.comments} />
      <CommentForm name={this.state.name} refresh={this.refresh}/>
    </div>
  }
}
