import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../theme/mode-toggle";

type NavLink = { label: string; href: string };

type Props = {
  logoText?: string;
  links?: NavLink[];
  cta?: { label: string; href: string };
  showSearch?: boolean;
};

export default function Header({
  logoText = "Brand",
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  cta = { label: "Get Started", href: "/get-started" },
  showSearch = true,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-indigo-600 text-white font-semibold">
              {logoText.charAt(0)}
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {logoText}
            </span>
          </Link>
          {/* Nav links (desktop) */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link: NavLink) => (
              <Link
                key={link.href + link.label}
                to={link.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {showSearch && (
              <div className="hidden md:block">
                <Input placeholder="Search..." className="w-56" />
              </div>
            )}

            {/* CTA */}
            <div className="hidden md:block">
              <Link to={cta.href}>
                <Button>{cta.label}</Button>
              </Link>
            </div>

            {/* Avatar */}
            <div className="hidden md:block">
              <Avatar>
                <AvatarImage src="" alt="profile" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen((v: boolean) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
            {/* Dark mode toggle */}

            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col gap-1">
            {links.map((link: NavLink) => (
              <Link
                key={link.href + link.label + "-mobile"}
                to={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to={cta.href}>
            <Button className="w-full mt-2">{cta.label}</Button>
          </Link>
          <div className="pt-3 flex items-center justify-between">
            <Avatar>
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </header>
  );
}
