let posts = [
  {
    _id: 1,
    title: 'Hello React-Router'
  },
  {
    _id: 2,
    title: 'Hello Redux'
  }
]
export const postReducer = (state = posts, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return
    default:
      return state
  }
}
