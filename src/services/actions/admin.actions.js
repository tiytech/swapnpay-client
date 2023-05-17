import { createAsyncThunk } from "@reduxjs/toolkit"


export const adminResetStateProperty = createAsyncThunk(
    'admin/adminResetStateProperty',
    async ({ key, value = null }, { rejectWithValue }) => {
        try {
            return { key, value }
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)