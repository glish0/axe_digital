import React from 'react';
import gpt3Logo from '../../logo.svg';


const Footer = () => {

  const date= new Date()
  const year = date.getFullYear()
  return(
  <div className="gpt3__footer section__padding justify-center">
    

    <div className="">
      <div className="gpt3__footer-links_logo">
      <svg width="679" height="497" viewBox="0 0 679 497" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_4_47)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57 210.062L57 436H105.921L105.921 220.683C105.921 161.136 154.193 112.864 213.74 112.864C273.287 112.864 321.559 161.136 321.559 220.683V436H371.124V210.062C371.124 123.319 300.805 53.0001 214.062 53.0001C127.319 53.0001 57 123.319 57 210.062Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M635.683 121.876L409.746 121.876V170.797H625.062C684.609 170.797 732.881 219.069 732.881 278.616C732.881 338.163 684.609 386.435 625.062 386.435H409.746V436H635.683C722.426 436 792.745 365.681 792.745 278.938C792.745 192.195 722.426 121.876 635.683 121.876Z" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d_4_47" x="0.799999" y="0.799999" width="848.145" height="495.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="28.1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.792157 0 0 0 0 0.72549 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_47"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_47" result="shape"/>
          </filter>
          </defs>
          </svg>

          
      
   
      </div>
      
    </div>
    <div className="gpt3__blog-heading ">
      <h1 className="gradient__text text-center">nous transformons des idées en réalités numériques. </h1>
    </div>
    <div className="gpt3__cta-btn ">
    
    <a href='https://chat.whatsapp.com/HxIm8iswg7RHi1IoepFxGx' target='_blank'>
      <button type="button" className='px-4 flex items-center gap-[10px]'> <span><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_71_376)">
        <path d="M20 10.2427C20 15.6231 15.6044 19.9848 10.181 19.9848C8.45991 19.9848 6.84319 19.5446 5.43581 18.7737L0 20.5L1.77194 15.2716C0.878469 13.8042 0.363909 12.0812 0.363909 10.2421C0.364561 4.86169 4.75886 0.5 10.1823 0.5C15.605 0.501304 20 4.86234 20 10.2427ZM10.1803 2.05346C5.62885 2.05346 1.9265 5.72777 1.9265 10.2447C1.9265 12.0368 2.51084 13.6959 3.49887 15.0459L2.46845 18.087L5.63929 17.0794C6.94362 17.935 8.50426 18.4333 10.1803 18.4333C14.7318 18.4333 18.4355 14.7596 18.4355 10.2427C18.4368 5.72777 14.7324 2.05346 10.1803 2.05346ZM15.1394 12.4868C15.0781 12.3883 14.9177 12.3283 14.6777 12.2084C14.4383 12.0884 13.2533 11.5112 13.0336 11.4329C12.8118 11.3527 12.6514 11.3123 12.491 11.5516C12.3325 11.791 11.8707 12.3284 11.7292 12.4888C11.589 12.6486 11.4488 12.6688 11.2081 12.5507C10.9675 12.4294 10.1914 12.179 9.27186 11.3658C8.55643 10.7318 8.07317 9.9512 7.93361 9.71186C7.79209 9.47316 7.91926 9.34403 8.03861 9.22534C8.14622 9.11773 8.27926 8.94621 8.39991 8.806C8.52056 8.66709 8.56034 8.56861 8.64056 8.40883C8.71947 8.24905 8.67969 8.11014 8.62034 7.98948C8.56034 7.86949 8.07969 6.69559 7.87818 6.21755C7.67796 5.74016 7.47775 5.81907 7.33688 5.81907C7.19666 5.81907 7.03623 5.79951 6.8758 5.79951C6.71536 5.79951 6.4545 5.85755 6.23472 6.0969C6.01494 6.33624 5.39277 6.91341 5.39277 8.08861C5.39277 9.26512 6.25428 10.3992 6.37493 10.5584C6.49623 10.7168 8.04056 13.2075 10.4868 14.1635C12.9344 15.119 12.9344 14.8001 13.3753 14.7596C13.8175 14.7192 14.7996 14.1825 14.9992 13.6255C15.2001 13.066 15.2001 12.5866 15.1394 12.4868Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_71_376">
        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
        </defs>
        </svg></span>Nous contacter</button></a>
    </div>
    <div className="gpt3__footer-copyright">
      <p>&copy; {year} AXE DIGITAL. All rights reserved.</p>
    </div>
  </div>
);

  }
export default Footer;
