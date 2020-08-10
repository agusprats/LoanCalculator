import React, { Fragment, useState} from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    //Definir State
    const [error, guardarError] = useState(false);

    //Cuando el usuario hace submit:
    const calcularPrestamo = e => {
        e.preventDefault();
    

    // Validar
    if( cantidad === 0 || plazo === '' ) {
        guardarError(true);
        return;
    }

    //Eliminar Error previo
    guardarError(false);

    //Habilitar el Spinner
    guardarCargando(true);

    setTimeout( () => {

    // Realizar Cotizacion
    const total = calcularTotal(cantidad, plazo);

    //Una vez calculado guardar total
    guardarTotal(total);

    //Deshabilitar el spinner
    guardarCargando(false);
    }, 3000);

}

    return (  
    <Fragment>
        <form onSubmit={calcularPrestamo}>
        <div className="row">
            <div>
                <label>Lending Amount</label>
                <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Example: 3000" 
                    onChange={ e => guardarCantidad( parseInt(e.target.value) ) }
                />
            </div>
            <div>
                <label>Payback Period</label>
                <select 
                    className="u-full-width"
                    onChange={ e => guardarPlazo( parseInt(e.target.value) ) }
                >
                    <option value="">Select</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                </select>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Calculate" 
                    className="button-primary u-full-width" 
                />
            </div>
        </div>
</form>


{ (error) ? <p className="error">All fields required</p> : null }
</Fragment>

 );
}

export default Formulario;