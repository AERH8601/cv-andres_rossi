import React from 'react';
import { FaLaptopCode, FaJava } from 'react-icons/fa';
import { BsDatabaseFillAdd } from 'react-icons/bs';


const Knowledge = () => {
    const knowledgeItems = [
        {
          icon: <FaLaptopCode />,
          title: "Desarrollo Web",
          description: "Webs, blogs",
        },
        {
          icon: <BsDatabaseFillAdd />,
          title: "Gestión de Bases de Datos",
          description: "SQL, NoSQL",
        },
        {
          icon: <FaJava />,
          title: "Desarrollo de API",
          description: "Java, Spring",
        },
       
    ]
  return (  
    <aside className='w-full h-60 mt-5 bg-icicle py-4 bg-taupe'>
        <div className="flex my-0 p-1 gap-5 text-4xl text-center">
            {knowledgeItems.map((knowledge, index) => (
            <a key={index} href={knowledge.title} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center bg-icicle mx-2 p- text-9xl">
              {knowledge.icon}
            </div>
            {knowledge.description}
            </a>    
        
            ))} 
        </div>    </aside>
    );
};

export default Knowledge;
