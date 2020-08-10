import React from 'react'

const  Resultado = ({total, plazo, cantidad }) => (
    <div className="u-full-width resultado">
        <h2>To sum up</h2>
        <p>The amount of the loan is: $ {cantidad}</p>
        <p>To pay in:  {plazo} Months</p>
        <p>Monthly payment: $ { (total / plazo).toFixed(2) }</p>
        <p>Total to pay: $ {(total).toFixed(2)}</p>

    </div>

);
    


export default Resultado;
