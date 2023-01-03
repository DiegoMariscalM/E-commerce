import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProuctsGlobal: (state, action) => action.payload
    }
})

export const { setProuctsGlobal } = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/products"
    axios.get(URL)
        .then(res => dispatch(setProuctsGlobal(res.data.data.products)))
        .catch(err => console.log(err))
}