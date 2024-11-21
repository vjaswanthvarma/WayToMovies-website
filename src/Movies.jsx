// import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import React from "react"
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Movies(){
    var[data,setdata]=React.useState([]);
    //console.log(data)
    useEffect(()=>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd354d4bd4emshe0a1c93f2568d67p10feabjsn4e706dd7e870',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};
   fetch(url, options).then((res)=>res.json()).then((dat)=>{setdata(dat.results)});
},[]);
async function get(data){
    try{
    await axios.post("http://localhost:8000/watch",JSON.stringify({data,val:"jaswanth"}))
    }
    catch(e){
        console.log(e);
    }
}
    return(<>
    <div className="mt-12 ml-10" id="movies">
    <h1 className="text-white text-3xl mb-10 ml-2 font-bold">Popular Movies</h1>
     <div className="grid grid-cols-4 gap-5">
    {data.map((dat)=><Card items={dat} />)}
        </div>

    </div>
    </>)
}