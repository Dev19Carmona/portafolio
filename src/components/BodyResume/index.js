import { container, bodyStep } from "./style/style.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export const BodyResume = () => {
  return (
    <div className={container}>
      <div className={bodyStep}>
        <div class="title-wrapper">
          <div class="icon-box">
            <FaGraduationCap />
          </div>

          <h3 class="h3">Education</h3>
        </div>
        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Liceo Salazar y Herrera</h4>

            <span>2013</span>

            <p class="timeline-text">
              Recibí una educación de calidad que me preparó para mis futuros
              desafíos académicos y profesionales. Los profesores y el ambiente
              de aprendizaje enriquecedor fueron fundamentales en mi crecimiento
              personal."
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Institucion Universitaria Pascual Bravo
            </h4>

            <span>2014 — 2016</span>

            <p class="timeline-text">
              Comencé mis estudios en mecánica automotriz en la universidad con
              gran entusiasmo, pero a medida que avanzaba, descubrí otras
              pasiones que me llevaron por un camino diferente. Aunque no
              completé mi grado en mecánica automotriz, la experiencia me enseñó
              valiosas habilidades y me ayudó a descubrir mi verdadera vocación
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Institucion Universitaria Pascual Bravo
            </h4>

            <span>2020 — 2024</span>

            <p class="timeline-text">
              Actualmente, me encuentro en el último semestre de mi carrera de
              desarrollo de software en la universidad. Esta experiencia ha sido
              apasionante, y a lo largo de mi trayecto académico, he adquirido
              habilidades fundamentales para la creación de aplicaciones y
              sistemas informáticos.
            </p>
          </li>
        </ol>
      </div>

      <div className={bodyStep}>
        <div class="title-wrapper">
          <div class="icon-box">
            <MdWork />
          </div>

          <h3 class="h3">Experience</h3>
        </div>
        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Noble Union [Code Craft]</h4>

            <span>2023</span>

            <p class="timeline-text">
              En la actualidad, formo parte del equipo de Noble Union,
              desempeñándome como auxiliar de backend. En esta posición,
              colaboro en el desarrollo y mantenimiento de las funciones y
              lógica que respaldan las aplicaciones y sistemas de la empresa.
              Trabajar en Noble Union me brinda una valiosa experiencia en el
              mundo laboral y la oportunidad de aplicar mis habilidades en el
              desarrollo de software en un entorno empresarial dinámico y
              desafiante.
            </p>
          </li>
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Independiente</h4>

            <span>2023 en adelante</span>

            <p class="timeline-text">
              Realizo proyectos independientes de desarrollo de software,
              principalmente sistemas tipo POS (Punto de Venta) y otras
              soluciones personalizadas para pequeñas empresas en Colombia.
              Estos proyectos me permiten aplicar mis conocimientos y
              habilidades de desarrollo de software para abordar las necesidades
              específicas de mis clientes, contribuyendo así a mejorar la
              eficiencia y la operación de sus negocios. Esta experiencia
              independiente me brinda un valioso aprendizaje y la oportunidad de
              hacer una diferencia en el mundo empresarial local.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
