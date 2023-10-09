import React from 'react';
import { PercentBar } from "./PercentBar";

const MainLeft = () => {
  return (

    <>
        <aside className='w-3/12 max-w-200 mr-1 italic text-xl flex-none items-center bg-cerulean p-1'>
            <section className=''>
                <div className="info-personal">
                    <img 
                        className="rounded-full h-40 w-40"
                        src='./images/AndresRosss_perfil.jpg'
                        alt="Foto perfil"/>
                    <div className="nombre">
                        <span>Andres Rossi</span>                        
                    </div>
                    <p className='flex text-center titulo-persona'>
                        Ingeniero de Petroleos <br />
                        Msc en Sostenibilidad energetica <br />
                        Proximo ingeniero de sistemas
                    </p>

                </div>
            </section>

            <div className="line-div px-14">
                
            </div>

            <section className='px-5 items-center text-center'>
                <div className="min-w-max space-y-1 px-5">
                <h3>Idiomas</h3>
                <PercentBar name="Español" percent="100" />
                <PercentBar name="Inglés" percent="60" />
                <PercentBar name="Portugués" percent="50" />
                </div>
            </section>

            <div className='line-div'>

            </div>

            <section className='px-5 mx-min items-center text-center'>
                <div>
                    <div className="min-w-full space-y-1 px-5">
                        <h3>Lenguajes de Programación</h3>
                        <PercentBar name="Java" percent="50" />
                        <PercentBar name="Python" percent="70" />
                        <PercentBar name="Html" percent="50" />
                        <PercentBar name="CSS" percent="60" />
                    </div>
                </div>            
            </section>
        </aside>
    </>
    
  );
};

export default MainLeft;