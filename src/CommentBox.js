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
    let post = this.props.postId
    store.dispatch({ type: 'ADD_COMMENT', comment, post })
    this.commentInput.value = ''
  }

  render() {
    let thisComments=this.props.comments.filter(item=>( 
      item.post === this.props.postId
    ))
    let commentList = thisComments
      .reverse()
      .map((item, i) => <li key={i}>{item.comment}</li>)
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
  comments: state.comments
})

export default connect(mapStateToProps)(CommentBox)
