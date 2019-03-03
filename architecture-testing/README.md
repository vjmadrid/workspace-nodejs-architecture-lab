# architecure-testing

Modulo de arquitectura para la ejecución de test sobre proyectos montados en Node.js

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

* **[eslint](https://www.npmjs.com/package/eslint)** : Herramienta para identificar y reportar patrones de codigo encontrados en Javascript y ECMAScript
* **[eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)** : Reglas para Standart Linter
* **[jasmine](https://www.npmjs.com/package/jasmine)** : Ayudas al código para el desarrollo de proyectos con Jasmine -> Franwork BDD para desarrollar código
* **[jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters)** : Soporte de ayuda de reportesr para usar con el framework de Jasmine BDD
* **[jasmine-console-reporter](https://www.npmjs.com/package/jasmine-console-reporter)** : Reporter para consola -> Mostrar resultados por consola
* **[chai](https://www.npmjs.com/package/chai)** : Librería con asserts para BDD / TDD
* **[chai-http](https://www.npmjs.com/package/chai-http)** : Librería con asserts de HTTP para BDD / TDD
* **[istanbul](https://www.npmjs.com/package/istanbul)** : Librería con para facilitar la información la cobertura, etc
* **[mocha](https://www.npmjs.com/package/istanbul)** : Librería para testing 
* **[supertest](https://www.npmjs.com/package/mocha)** : Librería para facilitar las pruebas sobre HTTP
* **[jasmine-supertest](https://www.npmjs.com/package/supertest)** : Librería para facilitar el uso con Jasmine
* **[sinon](https://www.npmjs.com/package/sinon)** : Librería pra realizar spies, stubs y mocks

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

