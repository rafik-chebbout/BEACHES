import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import keywest from '../assets/keywest.jpg'
import SelectCard from './selectCard'


const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 gap-4 grid sm:grid-cols-2 lg:grid-cols-3 ' >
      
      <SelectCard bg={borabora} text={'bora bora'}/>
      <SelectCard bg={borabora2} text={'bora bora2'}/>
      <SelectCard bg={maldives} text={'maldives'}/>
      <SelectCard bg={maldives2} text={'maldives2'}/>
      <SelectCard bg={maldives3} text={'maldives3'}/>
      <SelectCard bg={keywest} text={'keywest'}/>

    </div>
  )
}

export default Select
