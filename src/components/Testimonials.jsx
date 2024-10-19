import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

function Testimonial(props) {
  let reviews=props.reviews;
  const[index,setindex]=useState(0);
  function leftshiftHandler(){
    if(index-1<0){
      setindex(reviews.length - 1);
    }
    else{
      setindex(index-1);
    }
  }
  function rightshiftHandler(){
    if(index+1>=reviews.length)
    {
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }
  function surpriseHandler(){
    let randomindex=Math.floor(Math.random()*reviews.length);
    setindex(randomindex);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
      <Card review={reviews[index]}></Card>

      <div className='flex text-3xl mt-5 gap-3 text-violet-400 text-bold mx-auto'>
        <button className='cursor-pointer hover:text-violet-500 ' onClick={leftshiftHandler}>
          <FiChevronLeft></FiChevronLeft>
        </button>

        <button className='cursor-pointer hover:text-violet-500 ' onClick={rightshiftHandler}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

      <div>
          <button className='bg-violet-400 hover:text-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-2' onClick={surpriseHandler}>
          Surprise me
          </button>
        </div>
    </div>
  )
}

export default Testimonial
