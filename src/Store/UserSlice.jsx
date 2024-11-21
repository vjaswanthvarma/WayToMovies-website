import { createSlice } from "@reduxjs/toolkit";
const UserSlice=createSlice({
    name:"userslice",
    initialState:{
        items:{}
    },
    reducers:{
        updatedetails:(state,action)=>{
        state.items=action.payload;
            console.log("slice "+state.items);
        },
    }
})
export const {updatedetails}=UserSlice.actions;
export default UserSlice.reducer;
