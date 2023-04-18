import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Description placeholder
 * @date 4/18/2023 - 4:45:43 AM
 * @author h4z3m
 *
 * @type {*}
 */
export const publishEvent = createAsyncThunk('events/create',
    async (eventData, thunkAPI) => {

        const { rejectWithValue, getState } = thunkAPI;
        try {
            eventData.eventName = getState().events.eventName;

            const response = await axios.post(`${process.env.REACT_APP_BASE_API}/events/create`,
                JSON.stringify(eventData)
                , {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            const data = await response.json()

            if (!response.ok)
                console.log('HANDLE_ERROR')
            return { ...eventData, ...data };
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    })


/**
 * Description placeholder
 * @date 4/18/2023 - 4:45:43 AM
 * @author h4z3m
 *
 * @type {*}
 */
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

