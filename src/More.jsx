import React from "react";
import ReactPlayer from "react-player";
export default function More(){
    return (<>
    <div className="mt-12" id="other">
        <h1 className="text-white text-3xl my-5 ml-5 font-bold">Watch More</h1>
        <div className="flex flex-col gap-5">
        <div className="flex gap-52 ml-36">
             <ReactPlayer  url="https://youtu.be/R-nMXZiW1AI?si=1tHl70wPidIup4Aj"/>
             <ReactPlayer url="https://youtu.be/HNnt00swZ5Q?si=qznwLo02Gc2JTK5t"/>
        </div>
        <div className="flex gap-52 ml-36">
             <ReactPlayer  url="https://youtu.be/e3ew7YUeeQc?si=AhCZqDT2ax8mt1ub"/>
             <ReactPlayer url="https://youtu.be/4GPvYMKtrtI?si=rX1csuroIlPq06d1"/>
        </div>
        </div>
    </div>
       
    </>)
}