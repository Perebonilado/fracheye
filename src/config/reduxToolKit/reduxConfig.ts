import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { previousWorkApi } from "../../api-services/previous-work-api";

export const reduxStore = configureStore({
  reducer: {
    [previousWorkApi.reducerPath]: previousWorkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([previousWorkApi.middleware]);
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
