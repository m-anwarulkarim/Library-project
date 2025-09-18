import { questions } from "@/components/data/RecentlyAnsweredData";
import type { RecentlyAnsweredType } from "@/components/type/RecentlyAnsweredType";
import { useState } from "react";

export default function RecentlyAnswered() {
  const [visibleCount, setVisibleCount] = useState(4); // প্রথমে কতগুলো দেখাবে

  // slice করে বর্তমানে যতগুলো visible হবে
  const visibleQuestions = questions.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // প্রতি বার ৪টা করে বাড়বে
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-gray-100">
        Recently Answered Questions
      </h2>
      <div className="space-y-6">
        {visibleQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < questions.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}

function QuestionCard({ question }: { question: RecentlyAnsweredType }) {
  const [rating, setRating] = useState(0);

  return (
    <div
      className="relative p-6 border rounded-2xl shadow-sm 
                 bg-white dark:bg-gray-800 
                 border-gray-200 dark:border-gray-700 
                 hover:shadow-lg transition group overflow-hidden"
    >
      {/* Glow effect border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none 
                   border-2 border-transparent 
                   group-hover:border-red-400/60 dark:group-hover:border-red-500/60
                   transition-all duration-500"
      />

      {/* চারপাশে shimmer আলোর animation */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none 
                   bg-gradient-to-r from-transparent via-purple-400/20 to-transparent 
                   dark:via-purple-500/20
                   -translate-x-full group-hover:translate-x-full
                   transition-transform duration-700 ease-in-out"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">
        {question.title}
      </h3>

      {/* Snippet */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {question.snippet}
      </p>

      {/* Expandable Answer */}
      <details className="cursor-pointer">
        <summary className="text-blue-600 dark:text-blue-400 font-medium">
          পূর্ণ উত্তর দেখুন
        </summary>
        <p className="mt-2 text-gray-800 dark:text-gray-200 whitespace-pre-line">
          {question.answer}
        </p>
      </details>

      {/* Answer Info */}
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        <span>Answered by: {question.answeredBy}</span>
        <span>{question.time}</span>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        Question asked by: <span className="font-medium">{question.email}</span>
      </div>

      {/* ⭐ Rating System */}
      <div className="flex items-center gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-xl ${
              star <= rating
                ? "text-yellow-500"
                : "text-gray-300 dark:text-gray-600"
            }`}
          >
            ★
          </button>
        ))}
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
          {rating > 0 ? `You rated ${rating}/5` : "Rate this answer"}
        </span>
      </div>
    </div>
  );
}
