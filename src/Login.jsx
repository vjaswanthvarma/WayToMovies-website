import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { faDisplay, faL } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { updatedetails } from "./Store/UserSlice";
import { addItem } from "./Store/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function Login(){
   var [data,setdata]=useState({email:'',password:''});
   var[load,setload]=useState(false);
   var cart=useSelector((state)=>state.CartSlice.items);
   var navigate=useNavigate();
   var dispatch=useDispatch();
   var loc=useLocation();
  
   if(loc.state==="true"){
   // console.log("cart "+cart);
    var arr=[]
    cart.map((dt)=>arr.push(dt));
    console.log({list:arr})
    axios.post("http://localhost:8000/updateCart",JSON.stringify(arr))
    toast.success('Logout Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
   }
   const myStyle = {
    backgroundImage: "url(NetflixlBack.jpg)",
    backgroundSize: "cover",
    height: "100vh",
};
    async function checkuser(e){
        e.preventDefault();
        var json=JSON.stringify(data);

        try{
            setload(true)
        await axios.post("http://localhost:8000/userlogin",json).then((res)=>{
           if(res.data.status==="true"){
            setload(false);
            //console.log(res.data.data.data[0])
            //console.log(res.data.data.watch[0].list)
            dispatch(updatedetails(res.data.data.data));
          //  dispatch(addItem(res.data.data.watch[0].list));
                navigate("/home",{state:res.data.userinfo})
            }
            else{
                toast.error('Please Enter Valid Input', {
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
        })
        setload(false)
    }
        catch(e){
            console.log(e);
        }
    }
    return(<>
    <div style={myStyle}>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <nav>
        <a href="#"><img src="netflixlogo.jpg" alt="logo"  className="w-32 h-24  mix-blend-screen"/></a>
    </nav>
    <div className="flex justify-center z-40 mix-blend-screen mb-20">
  {load?<img src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/a/0/4/a047bb6e4236686095168948698596f6ceb059e8.gif"  className="bg-black mix-blend-screen z-40 align-middle"/>:false}
  </div>
  <div className="absolute left-1/2 top-1/2 rounded-md p-16 w-[450px] transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded-2xl" >
        <h2 className="right-[10px] bg-gray mb-[10px] mr-[200px] text-center text-white pb-[20px] pt-[10px] text-3xl">Login</h2>
        <form onSubmit={checkuser}>
            <div className="relative h-[60px] mb-2  bg-black-800">
                <input type="text"  className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5"  placeholder="Email or phone number" onChange={(e)=>{
                    setdata({username:data.username,email:e.target.value,password:data.password})
                }} required />
            </div>
            <div className="relative h-[60px] mb-2 mt-10  bg-black-800">
                <input  className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5" type="password" required placeholder="Password"  onChange={(e)=>{
                    setdata({username:data.username,email:data.email,password:e.target.value})
                }}/>
            </div>
            <button type="submit" className="w-full py-3 text-base bg-red-700 text-white font-medium rounded-md border-none outline-none my-6 mb-2 cursor-pointer transition duration-100 ease-in hover:bg-red-10">Login</button>
        </form>
            <p className="text-[#b3b3b3] mt-1">New to Netflix? <a href="/signup" className="text-white">Sign up now</a></p>
        <small className="block text-[#b3b3b3] text-base px-3 mt-3" >
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="https://policies.google.com/privacy" className="text-[#0071eb] ml-4 hover:underline">Learn more.</a>
        </small>
    </div>
    </div>
    </>)
}