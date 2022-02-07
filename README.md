![Filmorama](https://i.imgur.com/90nPmQb.png)
# Filmorama

Este proyecto fue desarrollado con React y los estilos fueron hechos con vanilla CSS. Además de esto se hizo uso de la API [THE MOVIE DB](https://developers.themoviedb.org/3/getting-started/introduction) para mostrar un listado de las películas con mejor votación en esa página.

## Demo
![Filmorama demo](src/Filmorama-demo.gif)

## Implementación
Para poder acceder al login de este proyecto se requiere un usuario y contraseña únicos. Estos pueden ser agregados en el archivo .env a las variables de entorno creadas para este propósito. 

El login cuenta con algunas validaciones como no recibir campos vacíos, verificar que el correo tenga el formato correcto, y que el usuario y contraseña coincidan con los guardados en las variables de entorno, de lo contrario se muestra un mensaje de error. 

Además de esto no permite ingresar a otras páginas como home o favorites si no se encuentra logeado el usuario. De las misma manera, una vez logeado siempre lo llevará a la página de home y no podrá ver la página de login a menos que cierrre sesión. 

Las llamadas a la API y al localStorage se crearon como promesas, ya que si bien no hay un backend para este proyecto, este tipo de solicitudes tienen una naturaleza asíncrona y si en el futuro se llega a implementar un servidor externo, las funciones ya están escritas para poder realizar estas operaciones asíncronas.

Por otro lado, dado el alcance de este proyecto, utilice el método en el cual esperaba las respuestas de las solicitudes al localStorage, para luego si actualizar la UI al momento de marcar y desmarcar las películas favoritas, en vez de actualizar primero mi UI con los cambios en el estado local y luego enviar esta información al localStorage, esto principalmente para evitar desicronías en los estados y las correspondientes acciones de correción en la UI. 

El proyecto se desarolló con un enfoque mobile-first, sin embargo es responsive para otros tamaños de pantalla como tablet o desktop. Ejemplos en desktop:

![login page desktop](https://i.imgur.com/WF3nyVC.png)

![home page desktop](https://i.imgur.com/ECeSupY.png)

![favorites page desktop](https://i.imgur.com/2pHaocM.png)

## Implementaciones futuras
- Agregar un backend para poder hacer login de varios usuarios con sus validaciones correspondientes.
- Agregar funcionalidades para los casos de error en las llamadas a la API y al servidor. 
- Agregar elementos visuales para representar el tiempo de espera en carga de información.
- Cambiar a una paginación que brinde más opciones para navegar entre páginas, no solo entre siguiente y anterior.
