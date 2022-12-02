export const FetchProduct = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
