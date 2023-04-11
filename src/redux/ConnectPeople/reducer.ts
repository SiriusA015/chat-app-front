
import { createSlice } from "@reduxjs/toolkit";

import { connectedPeople } from "../action";

const initialState = {
    loading: false,
    people: connectedPeople
};

export const peopleListSlice = createSlice({
    name: 'connectPeopleList',
    initialState,
    reducers: {
    },
});

export default peopleListSlice.reducer;