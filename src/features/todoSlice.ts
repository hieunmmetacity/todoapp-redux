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
            const newTodoList = [...state.value, action.payload];
            state.value = newTodoList;
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
        filterByStatus(state: any, action) {
            const filterValue = action.payload;
            if (filterValue === "1") {
                const newTodoList = [...state.value].filter(
                    (todo: any) => todo.status === "1"
                );
                state.todoFilter = newTodoList;
            } else if (filterValue === "0") {
                const newTodoList = [...state.value].filter(
                    (todo: any) => todo.status === "0"
                );
                state.todoFilter = newTodoList;
            } else {
                state.todoFilter = state.value;
            }
        },
        searchByName(state: any, action) {
            const searchValue = action.payload;
            if (searchValue !== "") {
                const newTodoList = state.value.filter((todo: any) =>
                    todo.name.toLowerCase().includes(searchValue.toLowerCase())
                );
                state.todoFilter = newTodoList;
            } else {
                state.todoFilter = state.value;
            }
        },
        sortByStatus(state: any, action) {
            const sortBy = action.payload;
            if (sortBy === "active") {
                const newTodoList = [...state.value].sort((a: any, b: any) => {
                    return a.status > b.status
                        ? 1
                        : a.status < b.status
                        ? -1
                        : 0;
                });
                state.value = newTodoList;
            } else if (sortBy == "hide") {
                const newTodoList = [...state.value].sort((a: any, b: any) => {
                    return a.status > b.status
                        ? -1
                        : a.status < b.status
                        ? 1
                        : 0;
                });
                state.value = newTodoList;
            }
        },
        sortByName(state: any, action) {
            const sortBy = action.payload;

            if (sortBy === "az") {
                const newTodoList = [...state.value].sort((a: any, b: any) => {
                    var alc = a.name.toLowerCase(),
                        blc = b.name.toLowerCase();
                    return alc > blc ? 1 : alc < blc ? -1 : 0;
                });
                state.value = newTodoList;
            } else if (sortBy === "za") {
                const newTodoList = [...state.value].sort((a: any, b: any) => {
                    var alc = a.name.toLowerCase(),
                        blc = b.name.toLowerCase();
                    return alc > blc ? -1 : alc < blc ? 1 : 0;
                });
                state.value = newTodoList;
            }
        },
    },
});
export const {
    addTodoList,
    updateTodoList,
    removeTodo,
    getTodoUpdate,
    changeStatus,
    filterByStatus,
    searchByName,
    sortByStatus,
    sortByName,
} = todoSlice.actions;
export default todoSlice.reducer;
