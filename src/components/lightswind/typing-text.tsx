"use client";

import { motion, type Variants } from "framer-motion";
import React, {
  type ElementType,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { cn } from "../lib/utils";

export interface TypingTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  loop?: boolean;
}

export const TypingText = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 2,
  fontSize = "text-4xl",
  fontWeight = "font-bold",
  color = "text-white",
  letterSpacing = "tracking-wide",
  align = "left",
  loop = false,
}: TypingTextProps) => {
  const [textContent, setTextContent] = useState<string>("");
  // Add a key to force re-render for looping
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const extractText = (node: ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") {
        return node.toString();
      }
      if (Array.isArray(node)) {
        return node.map(extractText).join("");
      }
      if (
        React.isValidElement(node) &&
        typeof node.props.children !== "undefined"
      ) {
        return extractText(node.props.children);
      }
      return "";
    };

    setTextContent(extractText(children));
  }, [children]);

  useEffect(() => {
    if (loop) {
      const totalDuration = (delay + duration) * 1000; // in ms
      const interval = setInterval(() => {
        setAnimationKey((prevKey) => prevKey + 1);
      }, totalDuration + 500); // Add a small buffer

      return () => clearInterval(interval);
    }
  }, [loop, delay, duration]);

  const characters = textContent
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  const characterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + i * (duration / characters.length),
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <Component
      className={cn(
        "inline-flex",
        className,
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        align === "center"
          ? "justify-center text-center"
          : align === "right"
          ? "justify-end text-right"
          : "justify-start text-left"
      )}
    >
      <motion.div
        key={animationKey}
        className="inline-block relative"
        initial="hidden"
        animate="visible"
        aria-label={textContent}
        role="text"
      >
        {/* This span is visible and used for layout */}
        <span aria-hidden="true" className="opacity-0">
          {textContent}
        </span>
        {/* This span is animated */}
        <motion.span
          className="absolute top-0 left-0"
          variants={characterVariants}
          custom={characters.length}
        >
          {textContent}
        </motion.span>
      </motion.div>
    </Component>
  );
};
