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

function IntegranteSelene() {
  return (
    <PerfilWrapper>
      <Nombre>Santiago Sandoval</Nombre>

      <Seccion>
        <h2>Habilidades</h2>
        <Lista>
          <ListaItem>JavaScript</ListaItem>
          <ListaItem>React</ListaItem>
          <ListaItem>Node.js</ListaItem>
          <ListaItem>C#</ListaItem>
          <ListaItem>Git y GitHub</ListaItem>
        </Lista>
      </Seccion>

      <Seccion>
        <h2>Proyectos</h2>
        <ProyectosWrapper>
          <ProyectoCard>
            <ProyectoTitulo>Gestor de Presupuestos</ProyectoTitulo>
            <ProyectoDescripcion>
              Aplicación web para que los usuarios controlen sus gastos mensuales, vean gráficas de categorías y definan límites de presupuesto.
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>Administrador de Cursos Online</ProyectoTitulo>
            <ProyectoDescripcion>
              Plataforma tipo "dashboard" donde un admin puede crear, editar y eliminar cursos, ver estadísticas de alumnos y gestionar contenido.
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>Agenda de Contactos con Firebase</ProyectoTitulo>
            <ProyectoDescripcion>
              CRUD completo de contactos personales con integración a Firebase Realtime Database, autenticación y notificaciones.
            </ProyectoDescripcion>
          </ProyectoCard>
        </ProyectosWrapper>
      </Seccion>
    </PerfilWrapper>
  );
}

export default IntegranteSelene;