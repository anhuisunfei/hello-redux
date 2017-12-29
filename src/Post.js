import React, { Component } from "react";
import PostBody from "./PostBody";
import CommentBox from "./CommentBox";

class Post extends Component {
 
  render() { 
  
    let postId=this.props.match.params.postId
    return <div className="post">
        <div className="upper">
          <PostBody postId={postId} />
        </div>
        <div className="bottom">
          <CommentBox postId={postId} />
        </div>
      </div>
  }
}

export default Post;
