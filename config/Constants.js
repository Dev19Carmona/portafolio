import { GrGraphQl } from "react-icons/gr";
import { BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";


export  const userData = {
  name: "Camilo Carmona",
  profession: "Full Stack",
  email: "camilocr3@hotmail.com",
  phone: "+57 318-406-4992",
  birthdate:"12 de Agosto de 1994",
  location: "Medellin, Colombia",
  aboutMe: `
  Soy Camilo Carmona, un apasionado desarrollador Backend, con conocimientos en Frontend, tengo 3 años de experiencia en programación. Mi enfoque meticuloso y lógico me impulsa a crear soluciones excepcionales. Mi código es modular y escalable, y mi pasión por la lógica sólida me permite resolver problemas de manera elegante. Creo en una comunicación clara y colaboración efectiva.
  Estoy emocionado por nuevas oportunidades de proyectos y fusionar mis habilidades con mi pasión por la tecnología.
  `,
  fameworksAndLibraries:[
    {
      icon:<BiLogoNodejs color="#036E02"/>,
      name: "Node JS",
      description: "El motor de backend que gestiona las solicitudes de los usuarios y maneja la lógica detrás de escena"
    },
    {
      icon:<FaReact color="#139ECA"/>,
      name: "React JS",
      description: " La biblioteca que transforma datos en interfaces atractivas y adaptables, mejorando la experiencia del usuario"
    },
    {
      icon:<GrGraphQl color="#DD34A6"/>,
      name: "Graph Ql",
      description: "El lenguaje que personaliza las solicitudes de datos, optimizando la comunicación entre clientes y servidores."
    },
  ],
  databases:[
    {
      icon:<BiLogoMongodb color="#00EC64"/>,
      name: "MongoDB",
      description: "La base de datos versátil y escalable que almacena y recupera datos para aplicaciones modernas."
    },
    {
      icon:<SiMongoose color="#870000"/>,
      name: "Mongoose",
      description: "La herramienta que esculpe y gestiona los modelos de datos en MongoDB, asegurando su estructura."
    },
  ],
}
export const AVATAR_PRUEBA = "https://www.iconarchive.com/download/i106641/diversity-avatars/avatars/cristiano-ronaldo.1024.png"
export const WHATAPP_COLOR= "#44BF54"