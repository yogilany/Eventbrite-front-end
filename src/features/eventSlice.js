import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const publishEvent = createAsyncThunk('auth/login',
    async (eventData, thunkAPI) => {

        const { rejectWithValue, getState } = thunkAPI;
        try {
            eventData.eventName = getState().events.eventName;

            const response = await fetch('http://localhost:8000/events/create',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventData),
                });
            const data = await response.json()

            if (!response.ok)
                console.log('HANDLE_ERROR')
            return { ...eventData, ...data };
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    })


export const eventSlice = createSlice({
    name: "events",
    initialState: {
        //Event states
        eventName: null,
        eventDescription: ""
    },
    reducers: {
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        },
        testReducer: (state) => {
            console.log("hello from test")
        },
    },
    extraReducers: (builder) => {

        builder.addCase(publishEvent.rejected, (state, action) => {

        }).addCase(publishEvent.pending, (state, action) => {

        }).addCase(publishEvent.fulfilled, (state, action) => {

        })
    }

});



export default eventSlice.reducer;

