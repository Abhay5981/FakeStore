
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Category() {
    const[slide, setSlide] = useState(0)
    const[categories, setCategory] = useState([])

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories")
        const data = await response.json()
        setCategory(data)
    }

    useEffect(
        ()=> {
            fetchCategory()
        }, [])

        const nextSlide = () =>{
            console.log(categories.length)
            if (categories.length - 8 == slide)  return false
            setSlide(slide + 3)
        }

        const prevSlide = () =>{
            if(slide == 0)  return false
            setSlide(slide - 3)
        }

  return (
    <div className='max-w-[1200px] mx-auto '>
     <div className=' my-2 flex items-center justify-between'>
        <div className='font-bold text-xl'>What's in your mind?</div>
        <div className='flex'>
            <div className='flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer'
            onClick={prevSlide}> 
                <FaArrowLeft/>
                </div>
            <div className=' flex justify-center items-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2 cursor-pointer' 
            onClick={nextSlide}>
                <FaArrowRight />
                 </div>
        </div>
     </div>
      <div className='flex overflow-hidden'>
        {
            categories.map(
                (cat, index) =>{
                    return(
                        <div style={{
                            transform: `translateX(-${slide * 100}%)`
                        }}
                        key={index} className='w-[150px] shrink-0 duration-500'>
                            <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                        </div>
                    )
                }
            )
        }
      </div>
      <hr className='w-full my-6 border-[1px]'/>
    </div>
  )
}

export default Category
