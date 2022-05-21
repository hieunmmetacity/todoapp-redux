import { createSlice } from "@reduxjs/toolkit";
import {
    getTodoLocalStorage,
    setTodoLocalStorage,
} from "../utils/localStorage";

const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        value: localStorage.getItem("todoList") ? getTodoLocalStorage() : [],
        todoUpdate: {},
        todoFilter: undefined,
    },
    reducers: {
        addTodoList(state: any, action) {
            const newTodoList = state.value.push(action.payload);
            setTodoLocalStorage(newTodoList);
        },
        getTodoUpdate(state: any, action) {
            const currentTodoUpdate = state.value.find(
                (item: any) => item.id === action.payload
            );
            state.todoUpdate = currentTodoUpdate;
        },
        updateTodoList(state: any, action) {
            const newTodoList = state.value.map((item: any) =>
                item.id === action.payload.id ? action.payload : item
            );
            state.value = newTodoList;
            setTodoLocalStorage(newTodoList);
        },
        removeTodo(state: any, action) {
            const newTodoList = state.value.filter(
                (item: any) => item.id !== action.payload
            );
            state.value = newTodoList;
            setTodoLocalStorage(newTodoList);
        },
        changeStatus(state: any, action) {
            const currentTodoUpdate = state.value.find(
                (item: any) => item.id === action.payload
            );
            if (currentTodoUpdate.status === "1") {
                currentTodoUpdate.status = "0";
            } else {
                currentTodoUpdate.status = "1";
            }
            const newTodoList = state.value.map((item: any) =>
                item.id === action.payload ? currentTodoUpdate : item
            );
            state.value = newTodoList;
            setTodoLocalStorage(newTodoList);
        },
        filterByStatus(state: any, action) {},
    },
});
export const {
    addTodoList,
    updateTodoList,
    removeTodo,
    getTodoUpdate,
    changeStatus,
    filterByStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
