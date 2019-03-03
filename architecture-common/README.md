# architecture-common

royecto que Muestra un mensaje "Hello World" ("Todo un clásico de cualquier desarrollo" :-) ) junto a información del evento que lo desencadeno a través de una petición REST (evento HTTP) pero todo ello montado dentro de una imagen docker

## Stack Tecnológico

* Node.js (https://nodejs.org)
* Docker (https://www.docker.com/)

## Prerrequisitos

Instalar las siguientes herramientas y frameworks:
* Node.js 8.10 o superior
* Editor de código
* Postman

Recomendación de elementos extra a instalar :
* Visual Studio Code: https://code.visualstudio.com/
* nvm: https://github.com/creationix/nvm
* npm: https://www.npmjs.com/ (ver. 6.5.0)

## Instalación

Generales

* Instalar y Configurar Node.js (Documento **workspace-nodejs-lab/doc/README-instalacion-configuracion-node.md**)
* Instalar y Configurar NVM (Documento **workspace-nodejs-lab/doc/README-instalacion-configuracion-nvm.md**)

## Preparación del proyecto

### Instalación de las dependencias del proyecto 

Instalar las siguientes dependencias :

* **[dotenv](https://www.npmjs.com/package/dotenv)** : Librería que facilita la carga de variables de entorno desde un fichero
* **[uuid](https://www.npmjs.com/package/uuid)** : Librería que facilita la generación de IDs
* **[architecture-testing](1.0.1)** : Librería de arquitectura para probar aplicaciones con nodejs

Ejecutar el siguiente comando

```bash
npm install 
```

Las dependencias estan establecidas en el fichero package.json


## Testing

Cada proyecto tiene su forma

## Despliegue

No aplica


## Versionado

**Nota :** Se utiliza [SemVer](http://semver.org/) para el versionado. 
Para ver las versiones disponibles acceder a los tags del repositorio

## Autores

* **Víctor Madrid**
