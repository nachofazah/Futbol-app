en este trabajo me dispuse a crear una aplicación react para el cual preparamos un header y un footer
contenidos en sus correspondientes componentes, y un app.js que a continuación voy a intentar explicar un poco
en app.js, trabajando en la api https://v3.football.api-sports.io/ con su correspondiente key 771bbcc69c07fb41e1bc6aff973fd96c
me dispuse a generar 2 componentes, cuyo contenido se genera con la info que trae el fetch de la api, estos son "ligas" y promediador"
el primer fetch que tomamos de la api con "apiFurvo" con el endpoint league nos trae una lista con 1000 ligas, la cual filtre
para buscar los id's de las ligas de mi interes, una vez supe los id's, los asocie a el form.select
para que cada vez que yo elijo una liga simplemente la filtro por id de las 1000 ligas y le paso la seleccionada al componente
Ligas, quien me imprime bandera, nombre de liga y logo
también, dinamicamente, según la liga que tengo elegida, y también guardando los parametros para hacerlo con el form.select
edito las variables "ligaid" y "season" las cuales uso para hacer un nuevo fetch, en este caso en "apiPromedios" al endpoint standings, que espera por parametro, una liga y una season. lo que este fetch retorna, se guarda en "promedio" y se le da como variable a el componente "Promediador" donde mediante sus indices, imprimo nombre de equipo que actualmente se rankea 1 en su liga
escudo, partidos jugados, ganados, perdidos, empatados goles a favor y goles en contra
cuya ruta se ve masomenos asi "resultado.response[0].league.standings[0][0]"
el return esta compuesto por el header, un grid dispuesto en 8/12 y 4/12 de 2 columnas en donde ubico
el buscador, un widget de la api que me muestra todos los partidos que se juegan de un dia seleccionado
en el header tenemos un nombre inventado "furvonews" junto a una imagen que descargue para que sea mas vistoso
junto con un menu navegable que nos despliega por las diferentes partes del app js
en el footer utilizamos imagenes png que también son links hacia las redes sociales
y tambien un link desabilitado con la unica función de mostar mi que fue desarrollado por mi, @NachoFazah
mientras que la mayoria de los elementos visuales son componentes extraidos de react-bootstrap
hay también de mi parte alguna edición de estilos para un mejor diseño
por ejemplo:iconoh e iconof, definen el tamaño de las imagenes que uso para las redes sociales o logo
mientras que difieren solo en donde estan ubicados, por eso también se ven afectados a la necesidad de un margin distinto
o también la creación de clases solo para cambiar el color al fondo o acomodar la posición de los elementos
logré que el diseño de la pagina sea responsive usando estructuras de tamaño adaptables y no fijas como en el caso de grid
siendo divida en fracciones y por porcentajes en los casos de algunos elementos

la api elegida a pesar de poder utilizarse forma gratuita, solo te permite hacer 100 gets al día, lo que limitó la capacidad de hacer pruebas




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
