import React from 'react'
import list from "../../public/list.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

export default function Freebook() {

  const filtererdBooks = list.filter((item) => {
    return item.price === 0
  })

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='max-w-screen-2xl container justify-center mx-auto md:px-28 px-4'>

      <div>
        <h1 className='text-xl font-semibold pb-2'>Free Offered Books</h1>
        <hr />
        <p className='py-5 '>Explore a vast collection of free books, from timeless classics to hidden gems, all waiting to be discovered. Whether you're seeking adventure, knowledge, or inspiration, there's a story for everyone—at absolutely no cost!</p>
      </div>
      <div className='justify-center my-8'>
        <Slider  {...settings}>
          {filtererdBooks.map((item) => {
            return <Card item={item} key={item.id} />
          })}
        </Slider>
      </div>
    </div>
  )
}
