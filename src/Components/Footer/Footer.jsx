import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoBookSharp,
  IoMail,
  IoCall,
  IoLocation,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoArrowUp,
  IoHeart,
} from "react-icons/io5";
import { Button } from "../ui";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-neutral-950 text-neutral-300">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 p-3 shadow-xl transition hover:scale-110 hover:bg-primary-700"
      >
        <IoArrowUp className="h-5 w-5 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-5">
              <span className="rounded-xl bg-primary-600 p-2">
                <IoBookSharp className="h-6 w-6 text-white" />
              </span>
              <span className="text-xl font-semibold text-white">
                The Book Heaven
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Discover, share, and enjoy books from every genre. A calm,
              curated space for readers who love quality stories.
            </p>

            <div className="mt-6 flex gap-4">
              {[IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="rounded-lg bg-neutral-900 p-2 transition hover:bg-neutral-800 hover:text-primary-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Links */}
          {[
            {
              title: "Explore",
              links: [
                { name: "Home", path: "/" },
                { name: "All Books", path: "/AllBooks" },
                { name: "Add Books", path: "/AddBooks" },
                { name: "My Books", path: "/MyBooks" },
              ],
            },
            {
              title: "Support",
              links: [
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy", path: "/privacy" },
                { name: "Terms", path: "/terms" },
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-400 transition hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <IoMail className="text-primary-500" />
                hello@bookheaven.com
              </li>
              <li className="flex items-center gap-3">
                <IoCall className="text-primary-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <IoLocation className="text-primary-500" />
                Reading City, RC
              </li>
            </ul>

            <div className="mt-7">
              <p className="mb-3 text-sm text-neutral-400">
                Get book updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-lg bg-neutral-900 px-3 py-2 text-sm text-white outline-none ring-1 ring-neutral-800 focus:ring-primary-600"
                />
                <Button size="sm">Join</Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-neutral-800 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-500">
            © {year} The Book Heaven. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-neutral-500">
            Crafted with heart for readers
          </p>

          <div className="flex gap-6 text-xs">
            <Link to="/privacy" className="hover:text-primary-400">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
