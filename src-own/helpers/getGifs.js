export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=iy4u6Fq0cUBZCXPfcrztBKUTg7nrVViJ&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsize_medium.url,
  }));

  return gifs;
};
