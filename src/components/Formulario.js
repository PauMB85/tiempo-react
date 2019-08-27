import React, {useState} from 'react';

const Formulario = ({datosConsulta}) => {

    //stsate del componente
    //busqueda = state, guardarBusqueda = this.setState()
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })


    const handleChange = e => {
        //cambiamos el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = e => {
        console.log('enviamos datos app');
        e.preventDefault();
        datosConsulta(busqueda);
    }

    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="input-file col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-file col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-file col s12">
                <input
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar clima"
                />
            </div>
        </form>
    );
};

export default Formulario;