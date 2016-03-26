import React, {Component} from "react"

import Kirari from "../services/Kirari"

const CommentComponent = (props) => {
  return <li>
    <div className="comment-body">{props.comment.body}</div>
    <div className="comment-author-name">{props.comment.author.name}</div>
  </li>
}
const ThreadHeader = (props) => {
  return <div>
    <h1>{props.name}</h1>
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
    client.comment(body).then(() => {
      props.refresh()
    })
    e.preventDefault()
  }
  return <form onSubmit={post}>
    <textarea id="comment-form" />
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
  }
  componentDidMount () {
    this.refresh()
  }
  refresh() {
    this.client.fetchThread(this.props.name).then((res) => {
      const comments = res.body["results"]
      this.setState({
        comments: comments
      })
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
