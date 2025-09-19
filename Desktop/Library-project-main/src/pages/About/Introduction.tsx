import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-16 px-6 rounded-2xl shadow-md max-w-5xl mx-auto">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-indigo-700 text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📚 Welcome to Our Digital Library
      </motion.h1>

      {/* subtext */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Our Online Library is a knowledge hub designed to make books and
        learning materials accessible to everyone, anywhere, anytime. With
        thousands of digital resources, we aim to empower readers, students, and
        researchers with the gift of knowledge at their fingertips.
      </motion.p>

      {/* 3. (Features Highlight) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            🌍 Anytime Access
          </h3>
          <p className="text-gray-600">
            Read and explore books 24/7 from anywhere in the world.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            📖 Thousands of Books
          </h3>
          <p className="text-gray-600">
            Browse through a wide collection of academic and general books.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            🔎 Smart Search
          </h3>
          <p className="text-gray-600">
            Find your favorite books instantly with our advanced search system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
