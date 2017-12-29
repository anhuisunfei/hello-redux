let comments = ['hello1', 'hello2']

export const commentReducer = (state = comments, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
} 
