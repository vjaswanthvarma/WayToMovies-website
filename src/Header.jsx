import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { useSelector } from "react-redux";
import Userinfo from "./Userinfo";
export default function Header(){
  var count=useSelector(state=>state.CartSlice.items.length)
  //console.log(useSelector(state=>state.CartSlice.items))
    var[data,setData]=React.useState();
    var nav=useNavigate();
    return(<>
        <div className="flex justify-between py-4 bg-gray-800 border border-black shadow-2xl rounded-lg absolute sticky">
        <ul className="flex justify-between md:flex md:flex-col">
         <img src="netflixlogo.jpg" className="w-28 h-12  mix-blend-screen"/>
            <div className="flex sm:flex sm:flex-col items-center">
            <a className=" text-2xl text-white mx-3 hover:underline hover:decoration-red-500 hover:bg-red-500 border rounded-lg border-none cursor-pointer mx-2"  onClick={()=>nav("/home")}>Home</a>
            <a className=" text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none mx-2" href="#tvshows">TvShows</a>
            <a className="text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none mx-2" href="#movies">Movies</a>
            <a className=" text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none mx-2" href="#orginals">Orginals</a>
            <a className=" text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none cursor-pointer mx-2" onClick={()=>nav("/watch")} >My List{count}</a>
            <a className="text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none mx-2" href="#other">More</a>
            <input type="text" onChange={(e)=>{setData(e.target.value)}} className="border border-white w-[380px] rounded-md bg-black h-10 mt-1 py-5 px-2 hover:text-xl hover:text-white text-white" placeholder="Search Movie" />
            <button  className="w-16 mr-6 text-3xl ml-5 text-white hover:text-4xl  hover:bg-red-500 border rounded-lg border-none pl-2" onClick={()=>{nav("/search",{state:data}) }}><FaSearch /></button>
            <Userinfo />
            <button className="flex  text-4xl mt-2  ml-36 justify-between text-white hover:underline  hover:bg-red-500 border rounded-lg border-none" onClick={()=>{
                   var audio = new Audio("notification-7-158193.mp3"); 
                   audio.play();
            }}><BsBell /></button>
             <button onClick={()=>{ nav("/",{state:"true"})}} className="text-5xl ml-36 text-white hover:underline hover:text-5xl  hover:bg-red-500 border rounded-lg border-none"  ><CiLogout /></button> 
            </div>
           
            </ul>
            </div>
    </>)
}