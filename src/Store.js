import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;
