async function Books_8() {
  const fetchData = await fetch(
    "https://gist.githubusercontent.com/nanotaboada/6396437/raw/855dd84436be2c86e192abae2ac605743fc3a127/books.json"
  );
  const FinalData = await fetchData.json();

  console.log(FinalData);

  return FinalData.books;
}

export default Books_8;
