import { configureStore } from "@reduxjs/toolkit";
import csReducer from "./cs";
import csSummaryReducer from "./csSummary";

const store = configureStore({
	reducer: { cs: csReducer, csSummary: csSummaryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
