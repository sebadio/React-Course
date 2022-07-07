export const getImagen = async () => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(
        Math.random() * 800
      )}/`
    );
    const data = await respuesta.json();
    const imagen = document.createElement("img");
    imagen.src = data.sprites.front_default;
    return imagen.src;
  } catch (error) {
    console.warn(error);
  }
};
