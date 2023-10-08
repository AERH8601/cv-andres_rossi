import React from 'react';

const MainLeft = () => {
  return (

    <>
        <div className="w-1/2 p-4">
        {/* Contenido de la columna izquierda */}
        </div>

        <aside className='debug w-96 bg-red-600 p-10'>
        <section>
            <div className="info-personal">
                <img 
                    className="foto-personal"
                    src="media/Icono_Andres_Africa.png"
                    alt="Foto Africa"/>
                <div className="nombre-persona">
                    <span className="primer-nombre">Andres</span>
                    <span className="apellido">Rossi</span>
                </div>
                <span className="titulo-persona">Petroleum Enginer and Msc Renovable Energies</span>
            </div>
        </section>
        <section>
            <div className="profile">
                <h3>Profile</h3>
            <p>
            Se llena con la informacion profesional de logros y
            desarrollo de proyectos, se pueden añadir diferentes recursos o
            información adicional.
            </p>
            </div>
        </section>
        <section>
            <div className="contact-me">                
            <h3>Contact me</h3>
            <div className="icon-container">
                <span className="material-symbols-outlined">
                smartphone
                </span>
            <h4>Phone number</h4>
            </div>
            <span>+57 300-688-0866</span>
            <div className="icon-container">
                <span className="material-symbols-outlined">
                mail
                </span>
            <h4>Email address</h4>            
            </div>
            <span>andres.rossi@udea.edu.co</span>
            <h4>Linkedin</h4>
            <span>link</span>
            </div>
        </section>
        <section>
            <div className="personal-skill">
                <h3>Personal skills</h3>
                <div className="skills">
                    <div className="skill-container">
                        <span>Team work</span>
                        <div className="skill-marker-container">
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <span>Communication</span>
                        <div className="skill-marker-container">
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker gray-background"></div>
                            <div className="skill-marker gray-background"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <span>creative</span>
                        <div className="skill-marker-container">
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker gray-background"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <span>Organisation</span>
                        <div className="skill-marker-container">
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker gray-background"></div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <span>Managment</span>
                        <div className="skill-marker-container">
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker black-background"></div>
                            <div className="skill-marker gray-background"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </aside>
    </>
    
  );
};

export default MainLeft;