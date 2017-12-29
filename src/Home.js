import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    let postList = this.props.posts.map((item,i) => (
      <Link to={`/post/${item._id}`} key={i} className="post-item">
        {item.title}
      </Link>
    ))

    return <div className="home">{postList}</div>
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)
