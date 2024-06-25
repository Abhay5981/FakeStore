import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const [restaurant, setRestaurant] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    fetchTopRestaurant();
  });

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className=" my-2 flex items-center justify-between">
        <div className="font-bold text-xl">Top Resturents in Bengaluru</div>
        <div className="flex">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className=" flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-3  overflow-hidden">
        {restaurant.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <hr className='w-full my-2 border-[1px]'/>
    </div>
  );
}

export default TopRest;
