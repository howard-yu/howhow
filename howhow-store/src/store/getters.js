export const getCount = state => { return state.count }
export const getTodos = state => state.todos;
export const getDone = state => {
    return state.todos.filter((item) => {
      return item.done;
    });
  }
export const getTodo = state => {
    return state.todos.filter((item)=>{
        return !item.done;
    });
}