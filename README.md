# Guía de Instalación y Uso de Node.js y Git en Windows 10

## Instalación de Node.js

### Paso 1: Descargar Node.js
Visita la página de descargas de Node.js: [Descargar Node.js para Windows 10](https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi) y descarga el instalador para Windows 10 de 64 bits.

### Paso 2: Ejecutar el Instalador
Ejecuta el archivo `.msi` descargado y sigue las instrucciones del instalador. Asegúrate de seleccionar la opción para agregar Node.js a tu PATH si se te pregunta durante la instalación.

### Paso 3: Verificar la Instalación
Abre una terminal (puedes buscar `cmd` en el menú de inicio y abrir el Símbolo del sistema) y ejecuta el siguiente comando para verificar que Node.js está correctamente instalado:
```bash
node -v
```
Deberías ver la versión de Node.js que acabas de instalar.

### Paso 4: Verificar la Ruta del Sistema (PATH)
Para asegurarte de que Node.js se puede ejecutar desde cualquier directorio, verifica que esté en tu PATH. En la terminal, ejecuta:
```bash
echo %PATH%
```
Busca la ruta donde instalaste Node.js. Si no está presente, tendrás que agregarla manualmente.

## Instalación de Git

Para ejecutar los scripts que utilizan comandos de Git, necesitarás tener Git instalado en tu máquina.

### Paso 1: Descargar Git
Visita la página de descargas de Git: [Descargar Git para Windows](https://git-scm.com/download/win) y descarga el instalador.

### Paso 2: Ejecutar el Instalador
Ejecuta el archivo descargado y sigue las instrucciones del instalador. Durante la instalación, asegúrate de seleccionar la opción para agregar Git al PATH si se te pregunta.

### Paso 3: Verificar la Instalación
Para verificar que Git está correctamente instalado, abre una terminal y ejecuta:
```bash
git --version
```
Deberías ver la versión de Git que acabas de instalar.

## Clonar el Repositorio

Antes de empezar a utilizar los scripts, debes clonar el repositorio donde se encuentran. Para hacerlo, sigue estos pasos:

1. Abre una terminal.
2. Navega al directorio donde deseas clonar el repositorio.
3. Ejecuta el siguiente comando (reemplaza `https://github.com/pascui89/the-forest.git` con la URL real del repositorio):
   ```bash
   git clone https://github.com/pascui89/the-forest.git
   ```
4. Una vez clonado, navega al directorio del repositorio:
   ```bash
   cd NOMBRE_DE_LA_CARPETA_REPOSITORIO
   ```

Ahora tienes una copia local del repositorio y puedes empezar a utilizar los scripts incluidos en él.

## Ejecución de Scripts

### Script `save-data.js`
Este script está diseñado para ejecutar comandos de Git como agregar archivos, hacer commits y empujar cambios a un repositorio remoto. Para ejecutar este script:

1. Abre una terminal y navega al directorio donde está el archivo.
2. Ejecuta el script con:
   ```bash
   node save-data.js
   ```

### Script `load-data.js`
Similar al script `save-data.js`, este script permite ejecutar una secuencia de comandos de Git para sincronizar cambios con un repositorio remoto. Sigue los mismos pasos que para `load-data.js`, asegurándote de que el nombre del archivo corresponda al script que deseas ejecutar.
