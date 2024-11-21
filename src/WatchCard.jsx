import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";
import { removeItem } from "./Store/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updatestatus } from "./Store/CartSlice";
export default function WatchCard({name,image,status}){
    var[tick,settick]=useState(status);
   var dispatch=useDispatch()
  async  function deleteItem(){
        dispatch(removeItem({'name':name,'image':image}))
        settick(false);
    }
    function update(){
        settick(true)
        dispatch(updatestatus({'name':name}));
    }
    return(<>
         <div class="border  rounded-xl shadow  h-full bg-black max-w-sm border-gray-500">
          <div className="max-w-sm object-cover">
  <img className="w-full h-52 object-fill rounded-xl" src={image} alt="product image" />
</div>
        
        <h5 class="text-xl font-semibold tracking-tight text-white flex items-center flex-col mt-5 overflow-hidden">{name}</h5>
    <div class="flex justify-between mt-3 object-cover px-4">
           <div>
           <button onClick={update} className="bg-white text-3xl border rounded-lg">{tick?<TiTickOutline />:<CiBookmarkPlus />}</button>
           </div>
           <div>
           <button className="bg-white text-3xl border rounded-lg" onClick={deleteItem}><AiOutlineDelete /></button>
           </div>
        
    </div>
</div>

    </>)
}