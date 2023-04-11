import { configureStore } from "@reduxjs/toolkit";
import ticketListSlice from "./Message/reducer";
import peopleListSlice from "./ConnectPeople/reducer";
import userSlice from "./User/reducer";

export const store = configureStore({
  reducer: {
    ticketList: ticketListSlice,
    connectPeople: peopleListSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
