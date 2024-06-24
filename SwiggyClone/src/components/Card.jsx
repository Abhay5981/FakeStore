import React from 'react'

function Card(props) {
  return (
    <div className='w-[270px] shrink-0 grow '>
        <div className='h-[180px] rounded-[15px] overflow-hidden relative'>
            <img className="object-cover w-full h-full " src={"http://localhost:5000/images/" + props.image} alt="" />
            <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 font-bold text-xl text-white tracking-tighter'>
           {props.offer}
            </div>
        </div>
        <div className='mt-3 text-xl font-bold'>
            {props.title}
        </div>
      
    </div>
  )
}

export default Card;
