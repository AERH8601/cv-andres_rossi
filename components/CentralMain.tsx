import React from 'react';
import Knowledge from './Knowledge';

const CentralMain = () => {
  return (
    <>        
        <aside className='debug bg-blue-topaz w-9/12 p-0 overflow-x-hidden overflow-y-scroll scrollbox'>
            <div className="flex flex-col gap-11 rounded-t-lg">
                <section className='debug bg-taupe '>

                    <div className="p-10">
                        <h1 className="text-[32px] tracking-tighter font-bold adjust-text">
                        Te doy la Bienvenida. Soy Andres Rossi,<br /> un 
                        apasionado por el conocimineto y el desarrollo. <br />
                        </h1>
                        {/* <div class="bg-fixed ..." style="./images/cabezoteCV.jpeg"> */}
                            <p className="text-[20px] py-4 adjust-text ">
                            Tengo 37 años y a lo largo de mi vida me he interesado por diferentes ramas del conocimiento; trabaje en la industria energética como ingeniero de campo en diferentes campos de la industria petrolera, pero siempre buen observador y curioso por la tecnología, desarrolle diferentes actividades entorno a la electrónica y los componentes automatizables; con esos conocimientos en mente desarrolle mi master en sostenibilidad energética y allí pude entender como la conectividad y las herramientas web puede crear un universo de posibilidades para el mejoramiento delos procesos cotidianos.
                            </p>   
                        {/* </div> */}
                        
                    </div>

                </section>
                    
                <section className='debug'>
                    <div className="debug flex flex-col w-full ">
                        <div className="flex flex-col text-center px-36 mb-12 ">
                            <h2 className="text-[32px] leading-10 font-bold">
                            Mis Conocimientos
                            </h2>
                            <p className="text-[20px] font-normal whitespace-normal text-justify">
                            Tengo una sólida base en desarrollo web, con conocimientos en HTML, CSS y JavaScript. He trabajado en proyectos simples de diseño y desarrollo de sitios web, lo que me ha permitido adquirir una comprensión fundamental de cómo crear y mantener páginas web. Estoy entusiasmado por seguir aprendiendo y mejorar mis habilidades en esta área en constante evolución.
                                
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-1 w-full h-3/5 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                             <Knowledge/>
                               
                        </div>
                    </div>                    
                </section>


                <section className='bg-icicle'>
                    <div className="flex flex-col">
                        <div className="flex flex-col text-center px-48 mb-12 ">
                            <h2 className="text-[32px] leading-10 font-bold">
                            Educación
                            </h2>
                            <p className="text-[20px] font-normal whitespace-normal text-justify">
                            Con una formación sólida en ingeniería de petróleos y una Maestría en Sostenibilidad Energética, he adquirido una profunda comprensión de los sistemas energéticos y su impacto en el medio ambiente. Esta base de conocimiento me ha inspirado a aplicar principios de sostenibilidad y eficiencia en mi enfoque hacia el desarrollo web. Entiendo que la tecnología web desempeña un papel clave en la transformación hacia un futuro más sostenible, y mi experiencia en energía y sostenibilidad me permite abordar proyectos web con una perspectiva más amplia y consciente, buscando soluciones innovadoras y respetuosas con el entorno.
                            
                            </p>
                        </div>
                        <div className="">
                        

                            <div className="container">
                            <hr className="m-5" />
                            </div>

                            
                        </div>
                    </div>

                </section>

                <section className='debug'>
                    <div className="debug flex flex-col w-full ">
                        <div className="flex flex-col text-center px-36 mb-12 ">
                            <h2 className="text-[32px] leading-10 font-bold">
                            Portafolio
                            </h2>
                            
                        </div>
                        <div className="grid sm:grid-cols-1 w-full h-3/5 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                             <Knowledge/>
                               
                        </div>
                    </div>                    
                </section>
            </div>
        </aside> 
    </>
  );
};

export default CentralMain;