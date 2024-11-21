import React from "react";
import ReactPlayer from 'react-player';
import { useRef } from "react";
import { useEffect } from "react";
export default function MovieCard(){
    const videoEl = useRef(null);
    var vdata=['Video3.mp4','Video4.mp4','Video2.mp4','Video1.mp4','netflixcard.mp4'];
    var srcdata=Math.floor(Math.random()*vdata.length)
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

    return(<>
    <div className="w- mt-2 object-fill">
    <video autoPlay className="w-[100%] h-[600px] object-cover sm:h-[500px] sm:object-cover" loop muted>
  <source  src={vdata[srcdata]} type="video/mp4" />
     </video>
        </div>
    </>)

}