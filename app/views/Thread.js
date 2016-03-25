import React, {Component} from "react"

import Kirari from "../services/Kirari"

const CommentComponent = (props) => {
  return <li>
    <div className="comment-body">{props.comment.body}</div>
    <div className="comment-comment-author-name">{props.comment.author.name}</div>
  </li>
}
const ThreadHeader = (props) => {
  return <div>
    <h1>{props.name}</h1>
    <p> There are {props.count} comments in this thread. </p>
  </div>
}
const ThreadList = (props) => {
  return <ul>
    {props.comments.map((comment, index) => {
      return <CommentComponent comment={comment} key={index} />
    })}
  </ul>
}
const CommentForm = (props) => {
  return <form>
    <textarea />
    <button type="submit">submit</button>
  </form>
}
export default class ThreadComponent extends Component { 
  constructor(props) {
    super(props)
    this.client = new Kirari()
    this.render = this.render.bind(this)
    this.props = props
    this.state = {
      name: this.props.name,
      count: 0,
      comments: []
    }
  }
  componentDidMount () {
    this.client.fetchThread(this.props.name).then((res) => {
      const comments = res["results"]
      this.setState({
        comments: comments
      })
    })
  }
  render() {
    return <div>
      <ThreadHeader name={this.state.name} count={this.state.count} />
      <ThreadList comments={this.state.comments} />
      <CommentForm name={this.state.name} />
    </div>
  }
}
