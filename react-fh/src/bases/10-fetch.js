const llave = "NijEJnrbPJJCJXTgzM6Rp0DQ9OyNj9yO";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${llave}`);

//promesas en cadena
peticion
    .then(respuesta => respuesta.json())
    .then(({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)