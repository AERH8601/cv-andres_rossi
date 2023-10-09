import React from 'react';
import { TiSocialLinkedin, TiSocialSkypeOutline, TiSocialGithub } from 'react-icons/ti';

const SocialLinks = () => {
  const socialMediaLinks = [
    {
      icon: <TiSocialLinkedin />,
      link: 'https://www.linkedin.com/in/andres-rossi-884b4695',
    },
    {
      icon: <TiSocialGithub />,
      link: 'https://github.com/AERH8601',
    },
    {
      icon: <TiSocialSkypeOutline />,
      link: 'https://twitter.com/tu-perfil-twitter',
    },
    // Agrega más redes sociales y enlaces según sea necesario
  ];

  return (
    <aside className='debug w-fit ml-1 bg-cerulean p-1'>
            <div className="flex-col my-10 p-1 gap-1 text-4xl">
            {socialMediaLinks.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
                </a>
            ))}
            </div>
    </aside>
  );
};

export default SocialLinks;
