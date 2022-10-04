import PropTypes from 'prop-types';


//para pasar numeros en props, se utilizan {} y dentro el numero
// los props igual pueden tener un valor por defecto

export const FirstApp = ( {
    title,
    subTitle,
    name
}) => {

    return(
        <>
            <h1>!!App!!</h1>
            <p>{title}</p> 
            <p>{subTitle}</p> 
            <p>{ name }</p>
        </>
    )
}

//con proptTypes se puede declarar los datos necesarios para los props
//esto no quiebra la app
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

//Valores por defecto en los props
FirstApp.defaultProps = {
    title: 'No hay title',
    subTitle: 'No hay subtitle',
    name: "alfredo"
}