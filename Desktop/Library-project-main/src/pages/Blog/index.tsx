import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div
      animate={{ x: [0, 200, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="w-20 h-20 bg-blue-500 rounded-xl"
    />
  );
}
