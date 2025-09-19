"use client";

import { books } from "@/components/data/Books-category";
import { ConfettiButton } from "@/components/lightswind/confetti-button";
import { useState } from "react";

const genres = [
  "All",
  "Fiction",
  "Mystery",
  "Self-Help",
  "Fantasy",
  "Adventure",
];
const languages = ["All", "English", "Bangla"];

export default function CategoryFilter() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const filteredBooks = books.filter((book) => {
    return (
      (selectedGenre && selectedGenre !== "All"
        ? book.genre === selectedGenre
        : true) &&
      (selectedLanguage && selectedLanguage !== "All"
        ? book.language === selectedLanguage
        : true)
    );
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="p-8 max-w-8xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
          📚 Book Category
        </h2>

        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Select Genre</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre === "All" ? "" : genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${
                  selectedGenre === genre ||
                  (genre === "All" && selectedGenre === "")
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Select Language</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang === "All" ? "" : lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${
                  selectedLanguage === lang ||
                  (lang === "All" && selectedLanguage === "")
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-64"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg">{book.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {book.author}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {book.genre} • {book.language}
                  </p>
                  <div className="flex ga-3">
                    <ConfettiButton
                      triggerOnHover={true}
                      variant="outline"
                      className="cursor-pointer"
                    >
                      {book.read}
                    </ConfettiButton>
                    <ConfettiButton
                      triggerOnHover={true}
                      variant="outline"
                      className="cursor-pointer"
                    >
                      {book.download}
                    </ConfettiButton>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300 text-center">
              No books found. Try selecting another category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
