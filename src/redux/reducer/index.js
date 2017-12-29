let comments=[
  'hello1',
  'hello2'
]

export const rootReducer = (state =comments , action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return 
    default:
      return state
  }
}

