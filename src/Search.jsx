import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { UserCard } from 'react-ui-cards';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Search(){
    var loc=useLocation();
    var[data,setdata]=React.useState({});
    //console.log(loc.state);
   useEffect(()=>{
        fetch(`https://www.omdbapi.com/?t=${loc.state}&apikey=8a72b5b9`)
        .then((res) => res.json())
        .then((dat) => {
          setdata(dat);
        })
    },[loc.state])
    if(data.Response==='False'){
        toast.error('No Movie is Found!', {
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
    return(<>
    <div className="bg-black bg-cover">
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
        <Header />
        <div class=" flex flex-col justify-center max-w-2xl shadow-xl ml-[650px] mt-3 border  border-white rounded-xl  ">
  <img class="w-64 ml-[170px]" src={data.Poster} className="border rounded-xl h-96" />
  <div class="px-6 py-4">
  <div className="flex flex-col">
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">Title:<h2 className="text-2xl text-white italic">{data.Title}</h2></h1>
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">Director:<h2 className="text-2xl text-white italic">{data.Director}</h2></h1>
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">Actors:<h2 className="text-2xl text-white italic">{data.Actors}</h2></h1>
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">Released:<h2 className="text-2xl text-white italic">{data.Released}</h2></h1>
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">Box office:<h2 className="text-2xl text-white italic">{data.BoxOffice}</h2></h1>
  <h1 className="flex gap-2 justify-center text-2xl text-white font-bold py-2">IMDBRating:<h2 className="text-2xl text-white italic">{data.imdbRating}</h2></h1>
  <div class="ml-[120px]">
  <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-3 my-2">#IndianMovies</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 my-2">#TopMovies</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 my-2">#youtube</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 my-2">#release</span>
  </div>
  </div>
  </div>
  </div>
  
       </div>
       <img src="footer.jpg" />
    </>)
}