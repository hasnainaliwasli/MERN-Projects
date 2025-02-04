import React from 'react'

export default function Card({ item }) {
  // console.log(item)
  return (
    // <div >
    <div className="card md:w-11/12 w-auto h-96 my-3 shadow-xl hover:scale-105 duration-200 cursor-pointer ">
      <figure className='h-64'>
        <img
          className='h-auto w-96'
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body h-64">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-outline">{item.price > 0 ? "" : "gift"}</div>
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-secondary">{item.price > 0 ? "$" + item.price : "Free"}</div>
          <button className="badge hover:bg-pink-600 hover:text-white  badge-secondary  badge-outline">ADD TO CART</button>
        </div>
      </div>
    </div>
    // </div>
  )
}
