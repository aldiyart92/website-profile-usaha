"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Cafe & Coworking", href: "/cafe-coworking" },
  { label: "Kelas & Programme", href: "/kelas-programme" },
  { label: "Kolaborasi", href: "/kolaborasi" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Artikel", href: "/artikel" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "navbar-blur shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${scrolled ? "bg-primary text-white" : "bg-white/20 text-white backdrop-blur"
                }`}
            >
              W
            </div>
            <span
              className={`font-semibold text-xl transition-colors ${scrolled
                ? "text-primary group-hover:text-primary"
                : "text-white group-hover:text-white/90"
                }`}
            >
              Workspace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                  ? scrolled
                    ? "text-primary bg-primary/10"
                    : "text-white bg-white/20 font-semibold"
                  : scrolled
                    ? "text-text-secondary hover:text-primary hover:bg-primary/5"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled
              ? "text-text-primary hover:bg-gray-100"
              : "text-white hover:bg-white/10"
              }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 mobile-menu-enter">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
