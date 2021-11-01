const initState = {
  todos: [],
};

const todosReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS: {
      return {
        todos: [...state.todos, payload],
      };
    }
    case DELETE_TODOS: {
      return {
        todos: [...state.todos, payload],
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
