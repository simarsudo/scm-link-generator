import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sticker, gun } from "../typeModels/models";

const initialState: (sticker | gun)[] = [];

const csSummarySlice = createSlice({
	name: "csSummary",
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<sticker | gun>) {
			const keyValue = action.payload;
			state.push(keyValue);
		},
		removeItem(state, action: PayloadAction<number>) {
			state.splice(action.payload, 1);
		},
	},
});

const { actions, reducer } = csSummarySlice;
export const { addItem, removeItem } = actions;
export default reducer;
