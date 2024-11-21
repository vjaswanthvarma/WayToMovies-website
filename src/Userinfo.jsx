import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { updatedetails } from './Store/UserSlice';
import { useEffect } from 'react';
Modal.setAppElement('#root');
export default function Userinfo(){
  var userdet=useSelector(state=>state.UserSlice.items);
  var dispatch=useDispatch();
  var [useredit,setedit]=useState(false);
  var[data,setdata]=useState(()=>{
    const sdata=localStorage.getItem("userdata");
    return sdata?JSON.parse(sdata):userdet[0]
  });
  useEffect(()=>{
    const stdata=localStorage.getItem("userdata");
    if(stdata){
      setdata(JSON.parse(stdata))
      dispatch(updatedetails([JSON.parse(stdata)]))
      //console.log(stdata)
    }
   
  },[])
    const [modalIsOpen, setModalIsOpen] =React.useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    function edit(){
      setedit(true);
    }
    function savedata(){
      setedit(false);
      dispatch(updatedetails([data]));
      localStorage.clear();

    }
    return (<>
                <button    onClick={openModal} className="flex  text-4xl mt-2  ml-20 justify-between text-white hover:underline  hover:bg-red-500 border rounded-lg border-none"><img src="usericon.jpeg" className="h-10 border rounded-md"/></button>
         <Modal 
  isOpen={modalIsOpen} 
  onRequestClose={closeModal} 
  contentLabel="Example Modal"
  className="fixed inset-0 flex items-center justify-center z-50"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50"
>
  <div className="bg-white p-6 border rounded-xl shadow-xl w-full max-w-sm mx-auto flex flex-col">
  <img src="user.png" className="w-20 ml-32" />
    <h3 className="text-md font-semibold mt-2">UserName</h3>
    {useredit?<input onChange={(e)=>{setdata({username:e.target.value,email:data.email,plan:data.plan,subscription:data.subscription})}}  type="text" className="border pl-2 rounded-lg w-[100%] border-red-300 h-10 my-2" />:<input  type="text" value={userdet[0]?.username||" "} className="border pl-2 rounded-lg w-[100%] border-red-300 h-10 my-2" />}
    <h3 className="text-md font-semibold mt-2">Email</h3>
    {useredit?<input onChange={(e)=>{setdata({username:data.username,email:e.target.value,plan:data.plan,subscription:data.subscription})}}  type="text" className="border pl-2 rounded-lg w-[100%] border-red-300 h-10 my-2" />:<input  type="text" value={userdet[0]?.email||" "} className="border pl-2 rounded-lg w-[100%] border-red-300 h-10 my-2" />}
    <div className="flex justify-between border border-white my-2">
    <h3 className="text-md font-semibold mt-2">Subscription</h3>
    <h4 className="mt-2">{userdet[0]?.subscription || " "}</h4>
    </div>
    <div className="flex justify-between my-2">
    <h3 className="text-md font-semibold mt-5">Plan Type</h3>
   {useredit?<select placeholder="choose plan" onChange={(e)=>{setdata({username:data.username,email:data.email,plan:e.target.value,subscription:data.subscription})}}>
                <option>Choose Plan</option>
                <option value="Basic">Basic</option>
                <option value="premium">premium</option>
            </select>:<h3 className="text-md font-semibold mt-5">{userdet[0]?.plan || " "}</h3>} 
    </div>
    <div className="flex justify-between my-2">
    <h3 className="text-md font-semibold">Status</h3>
    <img src="Active.png" className="w-10 h-8 mb-1 mr-5 "/>
    </div>
    <div className="flex justify-between">
   {useredit?<button className="px-4 py-2 bg-blue-500 hover:bg-blue-300 hover:border  hover:text-black  border rounded-xl bg-blue-600 w-36" onClick={savedata}>Save</button>:<button className="px-4 py-2 bg-blue-500 hover:bg-blue-300 hover:border  hover:text-black  border rounded-xl bg-blue-600 w-36" onClick={edit}>Edit</button>} 
    <button onClick={closeModal} className="px-4 py-2 bg-blue-500 hover:bg-blue-300 hover:border  hover:text-black  border rounded-xl bg-blue-600 w-36">
    Close
    </button>
    </div>
  </div>
</Modal>

 
    </>)
}