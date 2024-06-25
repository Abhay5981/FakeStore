import React, { useEffect, useState } from 'react'
import Card from './Card'

function OnlineDelivery() {
  const [restaurant, setRestaurant] = useState([])

  const fetchTopRestaurant = async() =>{
  const response = await fetch("http://localhost:5000/top-restaurant-chains")
  const data= await response.json()
  setRestaurant(data)
  }
  
      useEffect(
          () =>{
              fetchTopRestaurant()
          }
      )

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className=" my-2 flex items-center justify-between">
        <div className="font-bold text-xl">Restaurants with online food delivery in Bangalore</div>
      </div>
      <div className='grid grid-cols-4 gap-3'>
        {
          restaurant.map(
            (d, i)=> {
              return <Card {...d} key={i} />
            }
          ) 
        }
      </div>
    </div>
  )
}

export default OnlineDelivery
