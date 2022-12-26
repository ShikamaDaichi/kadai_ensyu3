export async function fetchImages(breed) {
    const response = await fetch(
      `//shibe.online/api/${breed}?count=16&urls=true&httpsUrls=true`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }