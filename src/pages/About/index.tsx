import { useLoaderData } from "react-router";

type BookItem = {
  isbn: string | number;
  title: string;
  subtitle?: string;
};

export function About() {
  const Data = useLoaderData() as BookItem[];
  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {Data.map((book: BookItem) => {
          return (
            <li key={book.isbn}>
              {book.title} <strong> {book.subtitle}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
