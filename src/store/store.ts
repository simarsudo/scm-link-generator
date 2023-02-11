import { configureStore } from "@reduxjs/toolkit";
import csReducer from "./cs";

const store = configureStore({
	reducer: { cs: csReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
