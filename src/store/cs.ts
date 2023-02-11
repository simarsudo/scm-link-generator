import { createSlice } from "@reduxjs/toolkit";

const initialState = { tab: "g" };

const csSlice = createSlice({
	name: "cs",
	initialState,
	reducers: {
		changeTab(state, action) {
			state.tab = action.payload;
		},
	},
});

const { actions, reducer } = csSlice;
export const { changeTab } = actions;
export default reducer;
