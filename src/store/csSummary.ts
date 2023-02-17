import { createSlice } from "@reduxjs/toolkit";

type csState = {
	[key: string]: string;
};

const initialState: csState = {};

const csSummarySlice = createSlice({
	name: "csSummary",
	initialState,
	reducers: {
		addItem(state, action) {
			const keyName: string = action.payload[0];
			const keyValue: string = action.payload[1];
			state[keyName] = keyValue;
		},
	},
});

const { actions, reducer } = csSummarySlice;
export const { addItem } = actions;
export default reducer;
