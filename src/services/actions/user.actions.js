import { createAsyncThunk } from "@reduxjs/toolkit"


export const userResetStateProperty = createAsyncThunk(
    'user/userResetStateProperty',
    async ({ key, value = null }, { rejectWithValue }) => {
        try {
            return { key, value }
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)