import PropTypes from 'prop-types';


//para pasar numeros en props, se utilizan {} y dentro el numero
// los props igual pueden tener un valor por defecto

export const FirstApp = ( {title, subTitle} ) =>{

    return(
        <>
            <h1>!!App!!</h1>
            <p>{title}</p> 
            <p>{subTitle}</p> 
        </>
    )
}

//con proptTypes se puede declarar los datos necesarios para los props
//esto no quiebra la app
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}