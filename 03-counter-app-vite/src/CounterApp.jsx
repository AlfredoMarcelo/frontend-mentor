import { PropTypes } from "prop-types"
import { useState } from "react"

//cuando se reenderiza el componente, se vuelve a cargar
//todo el codigo dentro del scoop, hay estados que evitan esto
export const CounterApp = ({value}) => {
    console.log("render")
    const [valor, setValor] = useState(value)

    const sumar = () => setValor(valor + 1 );
    const restar = () => setValor(valor - 1);
    const reiniciar = () => setValor(0); 


    return(
        <>
            <h1>Counter App !!</h1>
            <h2>{ valor }</h2>
            <button onClick={sumar}>
                sumar 1
            </button>
            <button onClick={(valor == 0? undefined:restar)}>
                restar 1
            </button>
            <button onClick={reiniciar}>
                reiniciar
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}