import React, { Component } from 'react'
import store from './redux/store'
import { connect } from 'react-redux'
class PostBody extends Component {
  handleLike = () => {
    this.props.dispatch({ type: 'LIKE', postId: this.props.postId })
  }

  render() {
    let thisComments = this.props.comments.filter(
      item => item.post === this.props.postId
    )
    let thisPost = this.props.posts.find(item => item._id === this.props.postId)
    return (
      <div className="post-body">
        <div className="like-num" onClick={this.handleLike}>
          {thisPost.like} 赞
        </div>
        <div className="comment-num"> {thisComments.length}条评论</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts
})
export default connect(mapStateToProps)(PostBody)
