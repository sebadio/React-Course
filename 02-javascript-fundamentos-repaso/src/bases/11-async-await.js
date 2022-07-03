import "./index.css";

// async & await

const getImagen = async () => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(
        Math.random() * 800
      )}/`
    );
    const data = await respuesta.json();
    const imagen = document.createElement("img");
    imagen.src = data.sprites.front_default;
    document.body.append(imagen);
  } catch (error) {
    console.warn(error);
  }
};

getImagen();
