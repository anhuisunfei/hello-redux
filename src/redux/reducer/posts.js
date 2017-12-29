let posts = [
  {
    _id: '1',
    title: 'Hello React-Router',
    like: 1
  },
  {
    _id: '2',
    title: 'Hello Redux',
    like: 3
  }
]
export const postReducer = (state = posts, action) => {
  switch (action.type) {
    case 'LIKE':
      let newState = state.map(item => {
        if (item._id == action.postId) {
          return { ...item, like: item.like+1 }
        }
        return item
      })
      return newState
    default:
      return state
  }
}
