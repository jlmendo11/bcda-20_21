# Ejercicio Asignatura

Enunciado
En esta práctica hay que desarrollar una dapp para un contrato asignatura desplegado en una red Ethereum.

La práctica hay que hacerla usando una dapp que ya está parcialmente hecha: muestra todos los datos del contrato Asignatura, muestra las calificaciones del alumno conectado (se identifica por la dirección seleccionada en Metamask), y permite que el profesor ponga notas a los alumnos.

La dapp de partida está disponible en https://github.com/sanpago/P3_Asignatura_Drizzle.

Se pide ampliar la dapp proporcionada con las siguientes nuevas funcionalidades:

Crear un botón para que un alumno se pueda matricular.  La dirección seleccionada en Metamask identifica al alumno que se está matriculando.
Crear un formulario para que el profesor cree nuevas evaluaciones.
Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.
Deben implementarse por lo menos dos funcionalidades. 

La funcionalidad 1 proporciona el 30% de la nota, la funcionalidad 2 proporciona el 30% de la nota, y la funcionalidad 3 proporciona el 40% de la nota, 

Entrega
La realización de esta práctica es obligatoria.
Esta práctica puede hacerse en grupos de hasta 3 alumnos.
La entrega de la práctica se hace subiendo a moodle un zip con los fuentes.
Eliminar previamente el directorio node_modules y build.
Solo uno de los miembros del grupo debe subir la práctica.
Incluir en la raíz del ZIP un fichero llamado 00datos.txt con el nombre de todos miembros del grupo.
Se recomienda subir la práctica a moodle con bastante antelación para evitar problemas de última hora que impidan su entrega.



-------------------------------------------------------------------------------------------------

Hemos realizado todo al 100%, incluso teniendo en cuenta detalles como:
Apartado 1: Automatricula solo si no estas matriculado (tampoco deja al profesor)
Apartado 2: Nuevas evaluaciones - solo si eres el profesor
Apartado 3: Listado de evaluaciones, con dos versiones:
---- V1: muestra lista de todas las evaluaciones y alumnos.
---- V2: incorpora un buscador por NOMBRE DE LA EVALUACION. 
         CUIDADO, HAY QUE PONER EL NOMBRE DE FORMA CORRECTA (ejemplo: Examen Final).
         Si ponemos un nombre incorrecto, aparecerá un mensaje de "no encontrado".
         Lo hemos hecho sin usar @drizzle/react-components, es decir, con "cacheCall"...
