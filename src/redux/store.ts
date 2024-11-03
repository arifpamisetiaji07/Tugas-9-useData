import { configureStore } from "@reduxjs/toolkit";
import uSlice from "./slice/slice";

export const store = configureStore({
    reducer: {
        uSlice,
    },
});