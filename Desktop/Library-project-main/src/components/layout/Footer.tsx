"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Github, Linkedin, PartyPopper } from "lucide-react";
import { Link } from "react-router";
import { clsx } from "clsx"; // Optional, class merge এর জন্য
import { ConfettiButton } from "../lightswind/confetti-button";

type FooterProps = React.HTMLAttributes<HTMLElement>; // সব HTML props support করবে

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMsg({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      const key = "subscribed_emails";
      const raw = localStorage.getItem(key);
      const arr: string[] = raw ? JSON.parse(raw) : [];
      if (arr.includes(email.toLowerCase())) {
        setMsg({ type: "info", text: "You are already subscribed." });
      } else {
        arr.push(email.toLowerCase());
        localStorage.setItem(key, JSON.stringify(arr));
        setMsg({
          type: "success",
          text: "Subscribed! Check your inbox (simulated).",
        });
        setEmail("");
      }
    } catch {
      setMsg({ type: "error", text: "Subscription failed. Try again." });
    }
  };

  const baseClass =
    "bg-gray-50 text-gray-800 dark:bg-slate-900/60 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700  ";

  return (
    <>
      <footer className={clsx(baseClass, className)} {...props}>
        <div className="max-w-8xl mx-auto px-8 py-5 grid gap-8 md:grid-cols-4 ">
          {/* Logo + short */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 p-2">
                <span className="sr-only">MyWebsite logo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7v6c0 5 5 10 10 11s10-6 10-11V7L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white m-0">
                  MyWebsite
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
                  Ship fast. Build beautiful interfaces. Delight users.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 m-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 m-0">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Subscribe
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Get product updates, articles, and resources.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                aria-label="Email address"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                required
              />
              <ConfettiButton
                type="submit"
                icon={<PartyPopper className="h-4 w-4" />}
                variant="gradient"
              >
                Subscribe
              </ConfettiButton>
            </form>

            {msg && (
              <div
                role="status"
                className={`mt-3 text-sm ${
                  msg.type === "success"
                    ? "text-green-500"
                    : msg.type === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {msg.text}
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
              </Link>
              <Link
                to="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Designed by ❤ Anwarul Karim
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
