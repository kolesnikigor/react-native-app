export async function getPhotos(start: number, limit: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${start}&_limit=${limit}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
