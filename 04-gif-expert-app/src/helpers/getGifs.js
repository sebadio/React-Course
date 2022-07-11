const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=J0BuX1MIuj3hEY2ESEJuiPH5iXCdpLkY&q=${category}&limit=20`;

  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

export default getGifs;
