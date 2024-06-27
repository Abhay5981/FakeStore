import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const[slide, setSlide] = useState(0)
  const [restaurant, setRestaurant] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    fetchTopRestaurant();
  });

  const nextSlide = () =>{
    if (restaurant.length - 4 == slide) return false
    setSlide(slide + 2) 
}

const prevSlide = () =>{
    if(slide == 0)  return false
    setSlide(slide - 2) 
}

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className=" my-2 flex items-center justify-between">
        <div className="font-bold text-xl">Top Resturents in Bengaluru</div>
        <div className="flex">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer" onClick={prevSlide}>
            <FaArrowLeft />
          </div>
          <div className=" flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden ">
          {
          restaurant.map(
            (d, i) => {
              return (
                <div style={{
                  transform: `translateX(-${slide * 100}%)`
              }}
              className='w-25 shrink-0 duration-500 '>
                 <Card {...d}  />
                 </div>
              )
             
             })
      
        }   
        </div>
       
      
      <hr className='w-full my-2 border-[1px]'/>
    </div>
  );
}

export default TopRest;
