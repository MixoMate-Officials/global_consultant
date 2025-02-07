import React, { useState } from 'react'
import Accordian from './common/Accordian';
import classNames from 'classnames';

function Faq() {
  const [state, setState]= useState({
    left: Array.from({length:3}).fill(false),
    right:Array.from({length:3}).fill(false)
  });

  const isLeftActive = state.left.some(i=> i === true);
  const isRightActive = state.right.some(i=> i === true);
  return (
    <div className='w-full min-h-screen bg-primary px-20 py-36'>
      <div className='flex flex-wrap'>
        <div className='lg:w-1/2 w-full'>
          <p className='upper text-muted font-bold lg:my-4 my-2'>FAQ</p>
          <h1 className='text-5xl text-white font-bold lg:my-10 my-0'>The Most Questions</h1>
        </div> 
        <div className='lg:w-1/2 w-full lg:px-10'>
          <p className='text-muted py-14'>
          Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae mixue ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo donec tempus.
          </p>
        </div>
      </div>

      <div className='lg:flex block lg:gap-x-10'>
        <div className={classNames("w-full lg:w-1/2", {"lg:w-5/6": isLeftActive})}>
          {
            state.left.map((item, ind)=> {
              return(
                <Accordian key={ind} control={{ind:ind, key: "left", state:state}} handleToggle={setState}/>
              )
            })
          }
       
   

        </div>
        <div className={classNames("w-full", "lg:w-1/2", {"lg:w-5/6": isRightActive})}>
        {
            state.right.map((item, ind)=> {
              return(
                <Accordian key={ind} control={{ind:ind, key: "right", state:state}} handleToggle={setState}/>
              )
            })
          }
        </div>

      </div>
    



    </div>
  )
}

export default Faq