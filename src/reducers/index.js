import { CREATE_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1547185819347,
      completed: false,
      tab: 0
    },
    {
      task: "Organize Closet",
      id: 1547185819348,
      completed: false,
      tab: 1
    },
    {
      task: "Organize Room",
      id: 1547185819349,
      completed: false,
      tab: 2
    },
    {
      task: "Organize Basement",
      id: 1547185819350,
      completed: false,
      tab: 3
    },
    {
      task: "Organize Hard Drive",
      id: 1547185819351,
      completed: false,
      tab: 4
    }
  ]
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case CREATE_TODO:
      console.log("create todo", action);
      const newToDo = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, todos: [...state.todos, newToDo] };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(index =>
          action.payload === index
            ? { ...state, completed: !state.todos.completed }
            : state
        )
      };
    default:
      return state;
  }
}

export default reducer;
