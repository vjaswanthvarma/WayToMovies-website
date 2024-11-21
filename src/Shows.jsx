import React from "react"
import { useEffect } from "react";
import Card from "./Card";
export default function Shows(){
    var[data,setdata]=React.useState([]);
    useEffect(()=>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd354d4bd4emshe0a1c93f2568d67p10feabjsn4e706dd7e870',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        fetch(url, options).then((res)=>res.json()).then((dat)=>{setdata(dat.results)});
},[]);
//console.log(data)
    return(<>
            <div className="mt-12 ml-10" id="tvshows">
            <h1 className="text-white text-3xl my-5 ml-2 font-bold">Popular Shows</h1>
             <div className="grid grid-cols-4 gap-4">
            {data.map((dat)=><Card items={dat} />)}
        </div> 
    </div>
    </>)
}