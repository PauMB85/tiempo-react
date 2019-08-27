This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> React hooks
> API [Open weather Map](https://openweathermap.org)

## Hooks

* Disponibles en v16.8
* Te permiten actualizar un **state** sin la necesidad de crear un **class component**
* Ahorro en el código.

Los __Hooks__  vienen con una función llamada *useState*, dicha función al extraer sus valores cuenta con 2 partes

```js
const [clientes, guardarCliente ] = useState([]);
```
Como se puede en el ejemplo la primera parte _clientes_ contiene el state actual y la segunda parte _guardarCliente_ es el encargado de guardar el state reemplazando el _this.setState(...)_
Para definir un state inicial, se tiene que hacer en el useState, si nos enfocamos en el ejemplo, el state _clientes__ empieza un array vacio.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
