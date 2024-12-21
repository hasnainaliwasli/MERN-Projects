import React from 'react'
import { Link } from 'react-router-dom';
import list from '../../public/list.json'
import Card from './Card';

export default function Courses() {
  return (
    // <div className='min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20'>
    <div className="max-w-screen-2xl container mx-auto md:px-28 px-4 items-center md:space-y-10 md:space-x-8">

      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to see you <span className='text-pink-500'>here!!! :)</span></h1>

        <p className='my-5 px-10'>
          Welcome to our collection of books, carefully curated to ignite your imagination and inspire your journey. Dive into the world of stories, knowledge, and adventures that await you. Let this be the start of an unforgettable reading experience!
        </p>

        <button className="btn btn-sm px-10 mt-5 btn-secondary"><Link to="/">Special Offers</Link></button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {list.map((item) => {
          return <Card item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
