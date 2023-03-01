export const fetchJson = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(`[API ERROR]:`, response);
  }
  return await response.json();
};
