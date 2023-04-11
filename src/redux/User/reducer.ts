import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { connectedPeople } from "../action";

export interface User {
    userId: string,
    name: string,
    avatar: string,
    photos: any,
}
const initialState: User = {
    userId: "Lichard Ernandes",
    name: "Lichard Ernandes",
    avatar: "/assets/img/avatar/me.jpg",
    photos: connectedPeople
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            return { ...action.payload }
        }
    },
});

export const { createUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;