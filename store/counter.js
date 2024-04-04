const initialState = {
  allTodo: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { content } = action.payload;
      return {
        ...state,
        allTodo: [...state.allTodo, content],
      };
    default:
      return state;
  }
};

export default counterReducer;
