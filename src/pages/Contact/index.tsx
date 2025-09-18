import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth - 80);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth - 80);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={{ x: [0, screenWidth, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-30 h-30 bg-blue-500 rounded-xl absolute top-40"
    >
      <img src="" alt="imag is caming" />
      <p>Lorem ipsum dolor sit.</p>
    </motion.div>
  );
}
