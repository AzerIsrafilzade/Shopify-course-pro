import React, {useEffect, useState} from 'react'
import Visioncard from './Visioncard'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

interface Melumat{
    id:number;
    vision_name:string; 
    vision_context:string;
    vision_nav:string;
}



const Visioncards: React.FC = () => {

const [melumat, setMelumat] = useState<Melumat[]>([])
useEffect(()=> {
    // TODO HTTP metodlar get post put delete 80 443
    // ssl 
    // ssh 21 61000
    // ? nmap 
    //Promise Chaining 
    // PROMISE PROMISE CHAINING CALLBACK // CRUD json-server localStorage TODOAPP
    axios.get("/assets/vision.json").then(cavab => setMelumat(cavab.data))
  }, [melumat])


  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={30}

    breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    
    className="mySwiper"
  >

  
        {
          melumat && melumat.map(birMelumat => (
            <SwiperSlide key={birMelumat.id}>
                 <Visioncard nameProps ={birMelumat.vision_name} contextProps={birMelumat.vision_context} navProps={birMelumat.vision_nav}  />
              </SwiperSlide>
          ))
        }
       
      

    </Swiper>

  )
}

export default Visioncards