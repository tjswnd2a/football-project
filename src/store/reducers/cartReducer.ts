const cartReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
}
const INITIAL_STATE = { todos: [] }
export default cartReducer;