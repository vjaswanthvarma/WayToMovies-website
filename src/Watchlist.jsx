import Header from "./Header"
import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import WatchCard from "./WatchCard"
import { addItem } from "./Store/CartSlice"
import  {useSelector}  from "react-redux"
import { useDispatch } from "react-redux"
export default function Watchlist(){
    var getdata=useSelector(state=>state.CartSlice.items);
    console.log(getdata)
    return (<>
    <div><Header />
    <div className="bg-black max-h-full">
    <div className="grid grid-cols-4 gap-5 justify-between">
    {getdata.map((dat)=><WatchCard name={dat.titleText.text} image={dat.primaryImage.url
} status={dat.watch} />)}
    </div>
    </div>
    </div>
    
    </>)
}