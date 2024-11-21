import React from "react"
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {addItem} from "./Store/CartSlice";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Card({items}){
    var dispatch=useDispatch();
    var getcart=useSelector((state)=>state.CartSlice.items)
    var[tick,settick]=React.useState(false);
    var[like,setlike]=React.useState(0);
    var[dislike,setdislike]=React.useState(0);
    var image=items.primaryImage && items.primaryImage.url? items.primaryImage.url : 'iceroad.jpg';
    async function setdata(){
        settick(true)
        items["watch"]=false;
        //console.log(items)
        dispatch(addItem(items));
       // localStorage.setItem("cart",JSON.stringify(getcart))
        
        try{
           // await axios.post("http://localhost:8000/watch",JSON.stringify({"name":items.titleText.text,"image":image}))
        }
            catch(e){
                console.log(e);
            }
            finally{
                toast.success('Added!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

    }
    return(<>
            <div class="rounded-xl  shadow-2xl h-full bg-black max-w-md border border-gray-800">
          <div className="max-w-md">
  <img className="w-full h-52 object-fill rounded-xl" src={image} alt="product image" />
</div>
        
        <h5 class="text-xl font-semibold tracking-tight text-white flex items-center flex-col my-2">{items.titleText.text}</h5>
    <div class="flex justify-between mt-3 mb-3 px-1">
        <div class="flex items-center justify-between">
           <div className="flex  flex-row justify-between gap-5 px-2">
           <button onClick={()=>{setlike(like+1)}} className="flex gap-2"><FaThumbsUp className="text-white w-7 h-7 cursor-pointer hover:text-green-400"/><h2 className="text-white">{like}</h2></button>
           <button onClick={()=>{setdislike(dislike+1)}} className="flex gap-2"><FaThumbsDown  className="text-white w-10 h-7 mt-1 cursor-pointer hover:text-blue-400"/><h2 className="text-white ">{dislike}</h2></button>
           <a href="https://www.youtube.com/@ZeeStudiosOfficial" className="text-white text-2xl mt-1 ml-10 cursor-pointer hover:text-pink-600"><FaGooglePlay /></a>
           </div>
           </div>
           <div className="px-5">
           <button className="text-white text-4xl" onClick={setdata}>{tick?<TiTickOutline />:<CiBookmarkPlus />}</button>
            </div>
        
    </div>
</div>
    </>)
}