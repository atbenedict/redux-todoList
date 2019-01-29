export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function createToDo(newToDo) {
  console.log("action", newToDo);
  return { type: CREATE_TODO, payload: newToDo };
}

export function toggleToDo(toDo) {
  console.log("action", toDo);
  return { type: TOGGLE_TODO, payload: toDo };
}
