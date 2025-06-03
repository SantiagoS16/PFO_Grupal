import React from "react";
import {
  PerfilWrapper,
  Nombre,
  Seccion,
  Lista,
  ListaItem,
  ProyectosWrapper,
  ProyectoCard,
  ProyectoTitulo,
  ProyectoDescripcion,
} from "/src/components/PerfilStyle.jsx";

function IntegranteIvan() {
  return (
    <PerfilWrapper>
      <Nombre>Iván Gonzales</Nombre>

      <Seccion>
        <h2>Habilidades</h2>
        <Lista>
          <ListaItem>JavaScript</ListaItem>
          <ListaItem>React</ListaItem>
          <ListaItem>Node.js</ListaItem>
          <ListaItem>MongoDB</ListaItem>
          <ListaItem>Git y GitHub</ListaItem>
        </Lista>
      </Seccion>

      <Seccion>
        <h2>Proyectos</h2>
        <ProyectosWrapper>
          <ProyectoCard>
            <ProyectoTitulo>Blog Personal con React y Markdown</ProyectoTitulo>
            <ProyectoDescripcion>
              Plataforma de blog donde el usuario puede escribir posts en Markdown y verlos renderizados dinámicamente. Incluye autenticación y CRUD de entradas.
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>Clon de Spotify (Frontend)</ProyectoTitulo>
            <ProyectoDescripcion>
              Interfaz de un reproductor de música con React que simula la experiencia de Spotify, incluyendo navegación, playlists y reproducción (sin audio real).
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>Red Social de Fotos</ProyectoTitulo>
            <ProyectoDescripcion>
              App donde se pueden subir imágenes, darle like a otras, dejar comentarios y seguir usuarios ficticios. Simula interacción social.
            </ProyectoDescripcion>
          </ProyectoCard>
        </ProyectosWrapper>
      </Seccion>
    </PerfilWrapper>
  );
}

export default IntegranteIvan;