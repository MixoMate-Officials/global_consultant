import React, { useState } from 'react'
import Hero from '../../component/common/Hero';
import { Link, useParams } from 'react-router-dom';
import { urlRoutes } from '../../routes';
import image from "../../assets/bg-2.jpg";
import { CoachingData } from '../../utils/constant/data';
import classNames from 'classnames';
function Coaching() {
  const {program} = useParams();
  const currentProgram = CoachingData[program];
  console.log(program, "param");
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Coaching`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-primary-light">
              Home
            </Link>{" "}
            / Coaching
          </p>
        }
      />
       <section className='container h-screen p-10'>
        <h1 className='lg:text-5xl md:text-4xl text-2xl'>{currentProgram.head} </h1>

      {
        currentProgram.description
      }
<h3 className='text-xl text-primary my-10
'>
We offer two courses, which are:

</h3>


<div className='flex flex-wrap gap-10 my-10'>
  {
    currentProgram.programs.map((item, ind)=>{
      return(
        <div key={item.id}
         className={
          classNames("'w-full md:w-1/2 lg:w-1/3 p-10 shadow-md border-l-8  rounded-lg  hover:text-white transition-all duration-150 hover:-translate-y-1 select-none'", 
          {
            "border-l-primary hover:bg-primary": ind %2 ==0
          },
          {
            "border-l-primary-light hover:bg-primary-light": ind %2 !=0
          },
        )
         }>
        <h2 className='text-xl text-center'>{item}</h2>
    </div>
 
      )
    })
  }
 
  
</div>
       </section>
    </>
   
  )
}

export default Coaching;