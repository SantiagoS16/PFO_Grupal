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

function IntegranteSantiago() {
  return (
    <PerfilWrapper>
      <Nombre>Santiago Sandoval</Nombre>

      <Seccion>
        <h2>Habilidades</h2>
        <Lista>
          <ListaItem>MySQL</ListaItem>
          <ListaItem>React</ListaItem>
          <ListaItem>Node.js</ListaItem>
          <ListaItem>Python</ListaItem>
          <ListaItem>Git y GitHub</ListaItem>
        </Lista>
      </Seccion>

      <Seccion>
        <h2>Proyectos</h2>
        <ProyectosWrapper>
          <ProyectoCard>
            <ProyectoTitulo>Gestor de Tareas</ProyectoTitulo>
            <ProyectoDescripcion>
              App para organizar tareas personales, con login y base de datos.
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>E-commerce React</ProyectoTitulo>
            <ProyectoDescripcion>
              Tienda online ficticia con carrito, filtros, y pasarela de pago simulada.
            </ProyectoDescripcion>
          </ProyectoCard>
          <ProyectoCard>
            <ProyectoTitulo>Dashboard de Finanzas</ProyectoTitulo>
            <ProyectoDescripcion>
              Panel de estadísticas financieras con gráficos y filtros dinámicos.
            </ProyectoDescripcion>
          </ProyectoCard>
        </ProyectosWrapper>
      </Seccion>
    </PerfilWrapper>
  );
}

export default IntegranteSantiago;