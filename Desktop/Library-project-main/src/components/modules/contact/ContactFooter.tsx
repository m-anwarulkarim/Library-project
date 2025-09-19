import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <motion.div
      className="mt-8 text-center text-xs text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>We reply within 1–2 business days. If urgent, call +8801712345678</p>
    </motion.div>
  );
}
