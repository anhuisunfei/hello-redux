import React, { Component } from 'react'
import store from './redux/store'

class CommentBox extends Component {
  state = {
    comments: ['hello1', 'hello2']
  }

  handleSubmit = e => {
    e.preventDefault()
    let comments = this.state.comments.slice()
    comments.push(this.commentInput.value)
    this.setState({ comments: comments })
    this.commentInput.value = ''
  }

  render() { 
    let commentList = store
      .getState()
      .reverse()
      .map((item, i) => <li key={i}>{item}</li>)
    let commentForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={value => (this.commentInput = value)} />
        <button type="submit">提交</button>
      </form>
    )

    return (
      <div className="comment-box">
        <div className="form">{commentForm}</div>
        <div className="comment-list">{commentList}</div>
      </div>
    )
  }
}

export default CommentBox
