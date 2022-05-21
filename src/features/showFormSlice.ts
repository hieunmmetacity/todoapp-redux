import { createSlice } from "@reduxjs/toolkit";

const showFormSlice = createSlice({
    name: "showForm",
    initialState: {
        value: { status: false, action: "" },
    },
    reducers: {
        setShowForm(state: any, action) {
            state.value = action.payload;
        },
    },
});
export const { setShowForm } = showFormSlice.actions;
export default showFormSlice.reducer;
