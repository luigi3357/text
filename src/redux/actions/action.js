import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const api='https://textapp-tecnico.herokuapp.com'

export const GETTEXT = createAsyncThunk('GETTEXT', async (text) => {
    const response = await axios(`${api}/iecho?text=${text}`)
    return response.data
})
export const CLEAN = createAsyncThunk('CLEAN', async () => {
    return ""
})