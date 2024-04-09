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
    case "DELETE_TODO":
      const { index } = action.payload;
      const updatedTodo = state.allTodo.filter((_, i) => i !== index);
      return {
        ...state,
        allTodo: updatedTodo,
      };
    default:
      return state;
  }
};

export default counterReducer;
