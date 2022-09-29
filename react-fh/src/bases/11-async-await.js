//Para utilizar await, debe estar dentro de un async,

const getImagen = async () => {

try {
    const llave = "NijEJnrbPJJCJXTgzM6Rp0DQ9OyNj9yO";
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${llave}`);
    const {data} = await respuesta.json();
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

} catch (error) {
    //
}

    
}

getImagen();

/* 


//promesas en cadena
peticion
    .then(respuesta => respuesta.json())
    .then(({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn) */