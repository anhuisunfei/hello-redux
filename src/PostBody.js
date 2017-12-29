import React, { Component } from 'react'
import store from './redux/store'
import { connect } from 'react-redux'
class PostBody extends Component {
  render () {
    return <div className="post-body">
        <div className="comment-num"> {this.props.comments.length}条评论</div>
      </div>
  }
}

const mapStateToProps = (state)=>({
  comments:state.comments
})
export default connect(mapStateToProps)(PostBody) 