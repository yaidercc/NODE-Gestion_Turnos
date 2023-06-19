# Gestor de Turnos

Esta es una aplicación de gestión de turnos desarrollada con Node.js, Socket.IO, HTML, CSS y JavaScript. Permite controlar y administrar los tickets de atención de manera dinámica utilizando sockets para la comunicación en tiempo real.

## Descripción

La aplicación de **Gestor de Turnos** es una solución eficiente para la gestión de tickets de atención en entornos como hospitales, consultorios médicos u oficinas de servicio al cliente. Con esta aplicación, los usuarios pueden generar nuevos tickets, atenderlos en escritorios específicos y mantener una visualización en tiempo real de los tickets pendientes y el estado actual de los últimos cuatro tickets atendidos.

La aplicación utiliza **Node.js** y **Socket.IO** para permitir una comunicación en tiempo real entre el servidor y los clientes. Esto garantiza que todos los usuarios conectados puedan ver los cambios en la lista de tickets pendientes y el estado actual de los tickets atendidos de manera instantánea.

## Características

- **Generación de nuevos tickets**: Los usuarios pueden generar nuevos tickets haciendo clic en el botón "Siguiente Ticket". Esto garantiza una secuencia ordenada y justa para la atención de los usuarios.

- **Atención de tickets**: Los tickets generados pueden ser atendidos por los escritorios disponibles. Los usuarios deben especificar el número de escritorio para atender un ticket. Esto permite un seguimiento y asignación adecuada de los recursos disponibles.

- **Estado actual de los últimos cuatro tickets**: La aplicación muestra en tiempo real el estado actual de los últimos cuatro tickets atendidos. Esto permite a los usuarios tener una visión general del progreso de la atención.

- **Lista de tickets pendientes**: La aplicación muestra en tiempo real la lista de tickets pendientes, lo que permite a los usuarios saber cuántos tickets quedan por atender y su orden de llegada.


