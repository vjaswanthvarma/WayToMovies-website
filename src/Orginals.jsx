import React from "react"
import { useEffect } from "react";
import Card from "./Card";
export default function Orginals(){
    var Adata=[{'titleText':{'text':"Adipurush"},'primaryImage':{'url':"Adipurush.jpg"}},{'titleText':{'text':"blackcrab"},'primaryImage':{'url':"blackcrab.jpg"}},{'titleText':{'text':"crowd"},'primaryImage':{'url':"crowd.jpg"}},{'titleText':{'text':"dog"},'primaryImage':{'url':"dog.jpg"}},{'titleText':{'text':"RRR"},'primaryImage':{'url':"RRR.jpg"}},{'titleText':{'text':"Gasthy"},'primaryImage':{'url':"gasthy.jpg"}},{'titleText':{'text':"Iceroad"},'primaryImage':{'url':"iceroad.jpg"}},{'titleText':{'text':"Matilda"},'primaryImage':{'url':"matilda.jpg"}},{'titleText':{'text':"spykids"},'primaryImage':{'url':"spykids.jpg"}},{'titleText':{'text':"morbius"},'primaryImage':{'url':"morbius.jpg"}},{'titleText':{'text':"Gas Onion"},'primaryImage':{'url':"gas onion.jpg"}},{'titleText':{'text':"Vinom"},'primaryImage':{'url':"vinom.jpg"}}]
    //var Adata=["Adipurush.jpg","blackcrab.jpg","crowd.jpg","dog.jpg","RRR.jpg","gasthy.jpg","iceroad.jpg","matilda.jpg","morbius.jpg","spykids.jpg"]
    
    return(<>
       <div className="mt-12 ml-10" id="movies">
    <h1 className="text-white text-3xl mb-10 ml-2 font-bold">Popular Orginals</h1>
    <div className="md:grid md:grid-cols-3 md:gap-10 md:mr-10  sm:grid sm:grid-cols-2 sm:gap-10 sm:mr-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:mr-10 xl:grid xl:grid-cols-4 xl:gap-5 xl:mr-10 2xl:grid 2xl:grid-cols-4 2xl:gap-5 2xl:mr-10 vsm:grid vsm:grid-cols-1 vsm:gap-10 vsm:mr-10">
    {Adata.map((dat)=><Card items={dat} />)}
        </div>

    </div>
    </>)
}