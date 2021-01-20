# AgroApp

***AgroApp*** es una aplicación web desarrollada con el **Stack MERN** (MongoDB usando MongoDB Atlas, Express.js, React y Node.js), donde se pueden registrar empleados en sus respectivas
empresas.

Para iniciar el servidor de la aplicación.
```
cd scrum
npm run start
```
Para iniciar el servidor de React.
```
cd frontend
npm start
```
**Link del tablero en Trello https://trello.com/b/hLQpMzml/scrum**
**Link de las historias de usuario https://docs.google.com/spreadsheets/d/1Ge8Nbs6QNk9hRgKgGaT0yeY0OJiGRuxwQ9fq8Aup8fM/edit?usp=sharing**
**Diagrama de flujo del desarrollo de la aplicación https://docs.google.com/presentation/d/1EODtNdT6AIYr7YIr10I2yF_MFotG9B9LNC-oUkMeZ3U/edit?usp=sharing**

## Desarrollo

Antes de comenzar con el frontend, se preparó un backend con ***Node.js***, haciendo uso de la librería ***Express.js***, la cual nos permite manejar el servidor de una manera bastante 
prática, como controlar las diferentes rutas que puede tener la aplicación y las respuestas que se darán a las peticiones. Se usó el modulo de **CORS** para poder conectar
el servidor del backend y el de React.

Con MongoDB Atlas, se creó la base de datos para poder almacenar y obtener las empresas y empleados de estas. Para conectarse a ella, se usó la libreria ***Mongoose***, que
además nos permite crear **esquemas para validación** de los datos que fluirán en la base de datos.

A la hora de empezar con el frontend, se hizo uso de **create-react-app** para obtener una plantilla totalmente configurada de un proyecto de React para avanzar más rapido. Antes
de comenzar a desarrollar los diferentes componentes, se instaló ***Redux y Redux-thunk***, herramientas increiblemente potentes para un manejo del estado de la aplicación con
asincronismo de manera profesional. Luego se desarrolló el **Login**, donde por ahora solo se puede registrar un usuario ***admin@admin.com*** con la contraseña ***"contraseña"***.

En la etapa de desarrollo de las tablas con empresas y empleados, se utilizó la librería ***React Router DOM*** donde nos permite manejar las diferentes rutas de la aplicación
en el Front-End. Para la tabla de empresas se requieren los siguientes datos:

- Nombre de la empresa (obligatorio)
- Email de la empresa
- Link del logo (donde se realiza una validación para comprobar si es una imagen y si tiene un tamaño mínimo de 100px x 100px)
- Página web de la empresa

Para la tabla de empleados se estructuró de la siguiente manera:

- Nombre del empleado (obligatorio)
- Apellido del empleado (obligatorio)
- ID de la compañía (Llave foranea para empresas)
- Email del empleado
- Telefono del empleado

Aunque estemos usando bases de datos no relacionales, se creó un esquema donde se relaciona cada empleado con la empresa, de manera que cuando se seleccione una empresa, se busque
en la base de datos los empleados que coincidan con su empresa, de igual forma, a la hora de guardar un empleado, es obligatorio haber seleccionado la empresa a la que 
pertence.

Luego de tener toda la aplicación totalmente funcional, se le dió un diseño responsive para poder visualizarla en cualquier dispositivo móvil.

Por último se realizaron unos tests unitarios para comprobar que algunas cosas se estén renderizando de manera correcta. Para iniciarlos se introduzca el siguiente comando

```
cd frontend
npm test
```

