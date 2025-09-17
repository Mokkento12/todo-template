import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";

const initialState: Todo[] = [
  { id: "1", text: "Изучить TS", completed: false },
  { id: "2", text: "Настроить rdtlkt", completed: false },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
