import React from 'react';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import {TiSocialLinkedin} from 'react-icons/ti';
import {TiSocialYoutube} from 'react-icons/ti';
import {TiSocialSkype} from 'react-icons/ti';

const MainRight = () => {
  return (
     <>
        <div className="w-1/2 p-4">
        {/* Contenido de la columna derecha */}
        </div>

        <aside className='debug w-96 bg-green-600 p-10'>
        <div className = 'flex items-center gap-2'>
            <TiSocialFacebook className='text-3xl' />
            <TiSocialInstagram className='text-3xl' />
            <TiSocialTwitter className='text-3xl' />
            <TiSocialLinkedin className='text-3xl' />
            <TiSocialYoutube className='text-3xl' />
            <TiSocialSkype className='text-3xl' />
            <span>Home</span>
      </div>
        </aside>
     </>   
  );
};

export default MainRight;