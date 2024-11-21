import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function SignUp(){
    var [data,setdata]=useState({username:'',email:'',password:'',plan:' '});
    var navigate=useNavigate();
        const myStyle = {
            backgroundImage: "url(/NetflixlBack.jpg)",
            backgroundSize: "cover",
            height: "100vh",
        };
    async function checkuser(e){
        e.preventDefault();
        var json=JSON.stringify(data);
        try{
        await axios.post("http://localhost:8000/usersignup",json).then((res)=>{ 
           // console.log(res);
            if(res.data.status==="true"){
                navigate("/")
            }
            if(res.data.status==="exist"){
                toast('User Already Exist!', {
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
        <a href="#"><img src="netflixlogo.jpg" alt="logo"  className="w-32 h-20  mix-blend-screen"/></a>
    </nav>
    <div className="absolute left-1/2 top-1/2 p-16 w-[450px] transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded-2xl" >
        <h2 className="right-[10px] bg-gray mb-[10px] mr-[200px] text-center text-white pb-[20px] pt-[10px] text-3xl">Sign up</h2>
        <form onSubmit={checkuser}>
          <div className="relative h-[50px] mb-4  bg-black-800">
                <input className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5" type="text" required placeholder="Name" onChange={(e)=>{
                    setdata({username:e.target.value,email:data.email,password:data.password,plan:data.plan})
                }} /> 
            </div>
            <div className="relative h-[50px] mb-4  bg-black-800">
                <input type="text"  className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5"  placeholder="Email or phone number" onChange={(e)=>{
                    setdata({username:data.username,email:e.target.value,password:data.password,plan:data.plan})
                }} required />
            </div>
            <div className="relative h-[50px] mb-4  bg-black-800">
                <input  className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5" type="password" required placeholder="Password"  onChange={(e)=>{
                    setdata({username:data.username,email:data.email,password:e.target.value,plan:data.plan})
                }}/>
            </div>
            <div className="relative h-[50px] mb-4  bg-black-800">
            <select className="h-full w-full bg-gray-800 border-none outline-none rounded-md text-white text-base px-5" onChange={(e)=>{ setdata({username:data.username,email:data.email,password:data.password,plan:e.target.value})}} placeholder="choose plan">
                <option>Choose Plan</option>
                <option value="basic">Basic</option>
                <option value="premium">premium</option>
            </select>
            </div>
            <button type="submit" className="w-full py-4 text-base bg-red-700 text-white font-medium rounded-md border-none outline-none my-6 mb-2 cursor-pointer transition duration-100 ease-in hover:bg-red-10">Sign Up</button>
        </form>
        <small className="block text-[#b3b3b3] text-base px-3 mt-5" >
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="https://policies.google.com/privacy" className="text-[#0071eb] ml-4 hover:underline">Learn more.</a>
        </small>
    </div>
    </div>
    </>)
}