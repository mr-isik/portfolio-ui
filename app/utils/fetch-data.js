export const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetching data: ${error}`);
  }
};
