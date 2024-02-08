import React from 'react';
import people from '../../assets/people.png';
import ai from '@/public/next.svg';
import Image from 'next/image';
import  Group2  from '@/public/assets/Group2.png'


const Header = () => (
  <div className="gpt3__header  py-16 pl-24 " id="home">
    <div className="w-3/5 flex  items-start flex-col pr-16 mr-7 pl-7 ">
      
      <h1 className="gradient__text font-bold text-5xl ">Ensemble créons des produits digitaux à l’ére du numérique</h1>
      <p className=' font-normal text-base text-[#81AFDD] mt-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Votre message ou adresse mail" />
        <button type="button">Contactez-nous</button>
      </div>

    </div>

    <div className=" flex relative w-2/5  ">
      <div className="w-[580px] h-[300px] absolute -top-4 right-0">
        <img
          src={"/assets/Group2.png"}
          className='h-[300px]  w-full object-fill  '
          alt="axe logo"
        />
      </div>
      

    </div>
  </div>
);

export default Header;