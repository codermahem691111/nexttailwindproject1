import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Image1 from './images/image 77.svg'
import Icon1 from './images/accessibility.svg'
import Image2 from './images/image 78.png'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';





const Home: NextPage = () => {
  return (
   <div>
        
       
   <div  className="flex lg:flex-row md:flex-row  md:flex-row sm:flex-col" id="div1">
      <div className="lg:basis-1/2 md:basis-1/2 sm:basis-1/1 mx-5 flex flex-col justify-center items-center" id='textch'>
        <h1  className="text-4xl">Healty in side</h1>
        <h1 className="text-4xl"> <span className="text-cyan-500">fresh</span> out side</h1>
        <p>Exercise is a very important need for our body. Health and</p> 
        <p>fitness will be obtained if you can do regular exercise and</p> 
        <p>run a healthy routine.</p>
             <div className="flex flex-row mt-5">
              <button  className="bg-cyan-400 py-2 px-3 rounded">Get started</button>
              <button className="ml-5 bg-blue-600 py-2 px-3 rounded">learn-more</button>
             </div>   
            
           
      </div>
       <div className=" lg:basis-1/2 md:basis-1/2 sm:basis-1/1 flex justify-center align-center" id="imgbg1">
       <Image
        className=' w-70 h-80 justify-center sm:mt-3' id='img1'
      
        src={Image1}
        alt="Picture of the author"
     
      />                                                                                                            
       </div> 
     </div> 
     
     <div  className="flex md:flex-row sm:flex-col mt-10 " id="textt">
      <div className="basis-1/2 md:basis-1/2  sm:basis-1/1 ml-20">
        <h2 className="text-3xl">Healty in side</h2>
        <h2 className="text-3xl"> <span className="text-cyan-500">fresh</span> out side</h2>
      </div>
      <div id="textp" className="basis-1/2  md:basis-1/2  sm:basis-1/1 ml-20">
         <div>
            <p>Exercise is a very important need for our body. Health and</p> 
            <p>fitness will be obtained if you can do regular exercise and</p> 
                <p>run a healthy routine.</p>
         </div>
         
      </div>
    </div>  

    
    <div className="flex flex-row mt-20 ml-5 py-10 " id="rowround">
    <div className="basis-1/3  ml-5 flex flex-row" id="poco1">
        <div className="iconcontainer flex justify-center mr-3 py-2 items-center">         <Image
        className='mt-1 ml2 textf' 
         
        src={Icon1}
        alt="Picture of the author"
     
      /></div>
        <div className="flex flex-col">
           <h4>Get that 11 line</h4> 
           <h4>In 13  days</h4>
            <div className="flex flex-row">
                <button className="rounded-full ...">learn more</button>

        
            </div>
        </div>
    </div>
    <div className="basis-1/3 ml-5  flex flex-row" id="poco2">
        <div className="iconcontainer flex justify-center mr-3 py-2 items-center">         <Image
        className='mt-1 ml2 textf' 
      
        src={Icon1}
        alt="Picture of the author"
     
      /></div>
        <div className="flex flex-col">
           <h4>Get that 11 line</h4> 
           <h4>In 13  days</h4>
            <div className="flex flex-row">
                <button className="rounded-full ...">learn more</button>

       
            </div>
        </div>
    </div>
    <div className="basis-1/3 ml-5 1 flex flex-row" id="poco3">
        <div className="iconcontainer flex justify-center mr-3 py-2 items-center">         <Image
        className='mt-1 ml2 textf' 
      
        src={Icon1}
        alt="Picture of the author"
     
      /></div>
        <div className="flex flex-col">
           <h4>Get that 11 line</h4> 
           <h4>In 13  days</h4>
            <div className="flex flex-row">
                <button className="rounded-full ...">learn more</button>

       
            </div>
        </div>
    </div>
  </div>

  
  <div className=" flex flex-row mt-20" id="lastsec">
    <div className="basis-1/2">
    <Image
        className=' h-80 w-80 ml-10 sm:mt-3' id='img1'
      
        src={Image2}
        alt="Picture of the author"
     
      />
    </div>
    <div className="basis-1/2 flex flex-col" id="lasttext">
      <h1 className="text-2xl">Best full body workout </h1>
        <h1 className="text-2xl mb-5"> to lose fat</h1>
        <p>Exercise is a very important need for our body.</p>
           <p>Health and fitness will be obtained if you can do regular</p>
            <p>exercise and run a healthy routine. Even at home we still</p>
           <p>have to be diligent in exercising, either alone or with your friends at home.
           </p>
           <button className="" id="btnlast">learn more</button>
    </div>
   </div>


   

   </div>

  )
}

export default Home
