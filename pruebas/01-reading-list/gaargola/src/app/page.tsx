async function getData() {
  const res = await fetch("./data/books.json");
  if (!res.ok) {
    throw new Error(`Failed to fetch data, received ${res.status}`);
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{data}</main>;
}
