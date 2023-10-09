
import React from 'react';

const ProjectCard = () => {
  return (
        <div>
        <section className="portfolio">
                    <div className="project-card">
                        <image 
                        className="rounded-full h-40 w-40"
                        src='./images/AndresRosss_perfil.jpg'
                        alt="Foto perfil"/>
                        <h3>Título del Proyecto 1</h3>
                        <p>Descripción corta del Proyecto 1.</p>
                        <button className="learn-more-btn">Saber Más</button>
                    </div>
                </section>

              
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn">&times;</span>
                        <h2>Título del Proyecto</h2>
                        <p>Descripción detallada del Proyecto. Puedes incluir enlaces a GitHub u otras plataformas.</p>
                    </div>
                </div>
        </div>
  );
};

export default ProjectCard;
