import "./index.css";

const apiKey = "J0BuX1MIuj3hEY2ESEJuiPH5iXCdpLkY";

const peticionAPI = fetch(
  `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random() * 800)}/`
);

peticionAPI
  .then((respuesta) => respuesta.json())
  .then((data) => {
    const { front_default: url } = data.sprites;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  });
