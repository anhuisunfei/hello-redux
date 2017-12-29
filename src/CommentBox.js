import React, { Component } from 'react'
import store from './redux/store'
import { connect } from 'react-redux'

class CommentBox extends Component {
  state = {
    comments: ['hello1', 'hello2']
  }

  handleSubmit = e => {
    e.preventDefault()
    let comment = this.commentInput.value
    store.dispatch({ type: 'ADD_COMMENT', comment })
    this.commentInput.value = ''
    console.log('handleSubmit', store.getState())
  }

  render() {
    let commentList = this.props.comments
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

const mapStateToProps = state => ({
  comments: state
})

export default connect(mapStateToProps)(CommentBox)
