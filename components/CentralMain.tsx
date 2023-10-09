import React from 'react';
import Knowledge from './Knowledge';

const CentralMain = () => {
  return (
    <>        
        <aside className=' bg-blue-topaz w-9/12 p-0 overflow-x-hidden overflow-y-scroll scrollbox'>
            <div className="flex flex-col gap-11 rounded-t-lg">
                <section className='bg-taupe '>

                    <div className="p-10">
                        <h1 className="text-[28px] tracking-tighter font-bold text-justify text-zinc-900">
                        Te doy la Bienvenida. Soy Andres Rossi,<br /> un 
                        apasionado por el conocimineto y el desarrollo. <br />
                        </h1>
                        {/* <div class="bg-fixed ..." style="./images/cabezoteCV.jpeg"> */}
                            <p className="text-[16px] py-0 text-justify mt-4">
                            Tengo 37 años y a lo largo de mi vida me he interesado por diferentes ramas del conocimiento; trabaje en la industria energética como ingeniero de campo en diferentes campos de la industria petrolera, pero siempre buen observador y curioso por la tecnología, desarrolle diferentes actividades entorno a la electrónica y los componentes automatizables; con esos conocimientos en mente desarrolle mi master en sostenibilidad energética y allí pude entender como la conectividad y las herramientas web puede crear un universo de posibilidades para el mejoramiento delos procesos cotidianos.
                            </p>   
                        {/* </div> */}
                        
                    </div>

                </section>
                    
                <section className=''>
                    <div className="flex flex-col w-full ">
                        <div className="flex flex-col text-center px-36 mb-12 ">
                            <h2 className="text-[28px] leading-10 font-bold">
                            Mis Conocimientos
                            </h2>
                            <p className="text-[16px] font-normal whitespace-normal text-justify mt-4">
                            Tengo una sólida base en desarrollo web, con conocimientos en HTML, CSS y JavaScript. He trabajado en proyectos simples de diseño y desarrollo de sitios web, lo que me ha permitido adquirir una comprensión fundamental de cómo crear y mantener páginas web. Estoy entusiasmado por seguir aprendiendo y mejorar mis habilidades en esta área en constante evolución.
                                
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-1 w-full h-3/5">
                             <Knowledge/>
                               
                        </div>
                    </div>                    
                </section>


                <section className='bg-icicle'>
                    <div className="flex flex-col">
                        <div className="flex flex-col text-center px-36 mb-12 ">
                            <h2 className="text-[28px] leading-10 font-bold">
                            Educación
                            </h2>
                            <p className="text-[16px] font-normal whitespace-normal text-justify mt-4">
                            Con una formación sólida en ingeniería de petróleos y una Maestría en Sostenibilidad Energética, he adquirido una profunda comprensión de los sistemas energéticos y su impacto en el medio ambiente. Esta base de conocimiento me ha inspirado a aplicar principios de sostenibilidad y eficiencia en mi enfoque hacia el desarrollo web. Entiendo que la tecnología web desempeña un papel clave en la transformación hacia un futuro más sostenible, y mi experiencia en energía y sostenibilidad me permite abordar proyectos web con una perspectiva más amplia y consciente, buscando soluciones innovadoras y respetuosas con el entorno.
                            
                            </p>
                        </div>
                        <div className="">
                                                 

                            
                        </div>
                    </div>

                </section>

                <section className=''>
                    <div className=" flex flex-col w-full ">
                        <div className="flex flex-col text-center">
                            <h2 className="text-[28px] leading-10 font-bold">
                            Portafolio
                            </h2>
                            
                        </div>
                        <div className="flex flex-col gap-11 w-max rounded-t-lg overflow-x-hidden overflow-y-scroll scrollbox">
                             <Knowledge/>
                               
                        </div>
                    </div>                    
                </section>
            </div>
            <footer>
                <div className="bg-primaryBG rounded-t-lg w-full py-3 px-10 text-center text-sm text-text-secondary">
                    <p>
                    Esta es una actividad de practica de la clase de Ingeniería Web, desarrollada con Next.js y Tailwind CSS.
                    </p>

                    <div className="container">
                        <hr className="mx-8 my-2" />
                    </div>

                    <span>
                        Desarrollado por Andres Rossi
                    </span>
                </div>
            </footer>
        </aside>
        
         
    </>
  );
};

export default CentralMain;