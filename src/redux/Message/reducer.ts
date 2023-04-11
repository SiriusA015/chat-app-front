import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tickets, message } from "../action";

const initialState = {
    loading: false,
    tickets: [] as any[],
    message: message
};

export function fetchTickets() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: tickets }), 0)
    );
}

export const getTicketListAsync = createAsyncThunk('tickets/fetch', async () => {
    const response: any = await fetchTickets();
    console.log(`response fetched: ${response.data}`);
    return response.data;
})

export const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTicketListAsync.pending, (state) => {
            state.loading = true;
        })
            .addCase(getTicketListAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets = action.payload;
            })
    }
});

export default ticketListSlice.reducer;