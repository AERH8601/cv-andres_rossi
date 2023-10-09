import React from 'react';
import { TiSocialLinkedin, TiSocialSkypeOutline, TiSocialGithub } from 'react-icons/ti';


const Knowledge = () => {
    const knowledgeItems = [
        {
          icon: <TiSocialLinkedin />,
          title: "Desarrollo Web",
          description: "Webs, blogs",
        },
        {
          icon: <TiSocialSkypeOutline />,
          title: "Gestión de Bases de Datos",
          description: "SQL, NoSQL",
        },
        {
          icon: <TiSocialLinkedin />,
          title: "Desarrollo de API",
          description: "Java, Spring Boot",
        },
    ]
  return (  
    <aside className='debug h-96 ml-10 bg-icicle p-1'>
        <div className="flex my-10 p-1 gap-5 text-5xl">
            {knowledgeItems.map((knowledge, index) => (
            <a key={index} href={knowledge.title} target="_blank" rel="noopener noreferrer">
            {knowledge.icon}
            {knowledge.description}
            </a>    
        
            ))} 
        </div>
    </aside>
    );
};

export default Knowledge;
