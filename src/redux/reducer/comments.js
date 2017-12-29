let comments = [
  {
    post: '1',
    comment: 'hello1'
  },
  {
    post: '1',
    comment: 'goods'
  },
  {
    post: '2',
    comment: 'hello2'
  }
]

export const commentReducer = (state = comments, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { comment: action.comment, post: action.post }]
    default:
      return state
  }
}
