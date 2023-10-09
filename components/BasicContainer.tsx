import React from 'react';
import CentralMain from "@/components/CentralMain";
import MainLeft from "@/components/MainLeft";
import SocialLinks from "@/components/SocialLinks";

const BasicContainer = () => {
  return (
     <div className='w-10/12 h-full bg-fixed screen flex justify-center items-center max-w-screen-xl min-w-screen-sm mx-auto'>
        <MainLeft/>
        <CentralMain/>
        <SocialLinks/>      
     </div>   
  );
};

export default BasicContainer;