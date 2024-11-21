import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log("coming")
           state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((dat)=>dat.titleText.text!==action.payload.name)
            console.log(state.items);
        },
        updatestatus:(state,action)=>{
            const index=state.items.findIndex((dat)=>dat.titleText.text===action.payload.name);
            state.items[index].watch=true;
        
        }
    }
})
export const {addItem,removeItem,updatestatus}=cartSlice.actions;
export default cartSlice.reducer;