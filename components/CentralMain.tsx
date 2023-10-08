import React from 'react';

const CentralMain = () => {
  return (
    <>
        <div className="w-1/2 p-4">
            {/* Contenido de la columna izquierda */}
        </div>

        <aside className='debug w-96 bg-blue-600 p-10'>
            <section>
                <div className="top-links">
                    <div className="icon-container">
                        <span className="material-symbols-outlined">
                            public
                            </span>
                        <a href="">Link1</a>
                        <span className="material-symbols-outlined">
                            public
                            </span>
                        <a href="">Link2</a>
                        <span className="material-symbols-outlined">
                            public
                            </span>
                        <a href="">Link3</a>
                    </div>
                
                </div>

            </section>
            <section>
                <div className="main-title">                
                    <h3>Education</h3>
                </div>
                <div className="milestone-container">
                    <div className="milestone">
                        <h4>Ingeniero de petroleos</h4>
                    <span></span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quo hic similique 
                        eius rerum error cumque quos ducimus illo labore, deleniti cum molestiae
                        sed atque autem modi suscipit quam consectetur!
                    </p>  
                    </div>
                    <div className="milestone">
                        <h4>Titulo</h4>
                    <span>Año</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quo hic similique 
                        eius rerum error cumque quos ducimus illo labore, deleniti cum molestiae
                        sed atque autem modi suscipit quam consectetur!
                    </p>  
                    </div>
                </div>

                
                <div className="main-title">
                    <h3>Profesional skills</h3>                                  
                </div>
                    <div className="grid-container">                    
                        <div className="profesional-skills-container">
                            <div className="profesional-skill">
                                <span>Figma</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                                </div>
                            </div>
                            <div className="profesional-skill">
                                <span>Ilustrator</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                                </div>
                            </div>
                            <div className="profesional-skill">
                                <span>Indesign</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                                </div>
                            </div>
                            <div className="profesional-skill">
                                <span>Photoshop</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                                </div>
                            </div>
                            <div className="profesional-skill">
                                <span>HTML/CSS</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                                </div>
                            </div>
                            <div className="profesional-skill">
                                <span>MS-Word</span>
                                <div className="profesional-skill-bar">
                                    <div className="profesional-skill-bar-fill"></div>
                        </div>
                    </div>


                    </div>
                </div>
                <div  className="milestone">
                    <span></span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Rem magnam, dolore tenetur beatae laboriosam optio, reprehenderit
                    quidem quia repellat aperiam quas laudantium mollitia cumque ipsum, 
                    blanditiis modi nemo harum culpa.
                </p> 
                </div>

                
            </section>
            <section>
                <div className="main-title">
                    <h3>Work experience</h3>
                </div>
                <div className="milestone">
                <h4>Descripcion</h4>
                <span>Año</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi! Reprehenderit 
                    hic est saepe, similique nesciunt sed excepturi cum? Molestiae laboriosam aspernatur 
                    aperiam itaque! Alias pariatur reiciendis quae laudantium sed.
                </p> 
                </div>            
            </section>
            <section>

            </section>
        </aside>
        
    </>
  );
};

export default CentralMain;