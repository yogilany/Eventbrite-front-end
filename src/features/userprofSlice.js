import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLikedEvents = 
    async (token) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_API}/users/me/event/liked`,
                {
                    headers:
                    {
                        ContentType: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log("Response size :", response.data.length);
            if (response.status !== 200)
                throw new Error(response?.data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
export const likeEvent =
    async (token, eventid) => {
        try {
            const response = await axios({
                method: "POST",
                url: `${process.env.REACT_APP_BASE_API}/users/me/event/${eventid}/like`,
                params: { "event_id": eventid },
                headers: {
                    ContentType: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            );

            console.log('Event liked:', response.data);
        } catch (error) {
            console.error('Error liking event:', error);
        }
    }
    export const unlikeEvent =
    async (token, eventid) => {
        try {
            const response = await axios({
                method: "DELETE",
                url: `${process.env.REACT_APP_BASE_API}/users/me/event/${eventid}/unlike`,
                params: { "event_id": eventid },
                headers: {
                    ContentType: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            );

            console.log('Event unliked:', response.data);
        } catch (error) {
            console.error('Error unliking event:', error);
        }
    }







    export const getfollwingpeople =
    async (token) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_API}/users/me/user/following`,
                {
                    headers:
                    {
                        ContentType: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log("Response size :", response.data.length);
            if (response.status !== 200)
                throw new Error(response?.data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    export const FollowEvent =
    async (token, eventid) => {
        try {
            const response = await axios({
                method: "POST",
                url: `${process.env.REACT_APP_BASE_API}/users/me/user/${eventid}/follow`,
                params: { "user_id": eventid },
                headers: {
                    ContentType: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            );

            console.log('Event liked:', response.data);
        } catch (error) {
            console.error('Error liking event:', error);
        }
    }
    export const unFollowEvent =
    async (token, eventid) => {
        try {
            const response = await axios({
                method: "DELETE",
                url: `${process.env.REACT_APP_BASE_API}/users/me/user/${eventid}/unfollow`,
                params: { "user_id": eventid },
                headers: {
                    ContentType: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            );

            console.log('Event unliked:', response.data);
        } catch (error) {
            console.error('Error unliking event:', error);
        }
    }

    