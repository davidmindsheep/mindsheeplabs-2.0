"use client";
import Link from "next/link";
import useBrand from "../hooks/useBrand";

export default function NavBar({ activePage }) {
  const brand = useBrand();
  return (
    <nav className="glass-nav subpage-nav">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" style={{ display: "flex", alignItems: "center", height: "60px" }}>
          <span className="nav-brand-text">{brand.name}</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/services"
            className={`nav-link text-sm font-semibold tracking-wide${activePage === "services" ? " nav-link-active" : ""}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`nav-link text-sm font-semibold tracking-wide${activePage === "about" ? " nav-link-active" : ""}`}
          >
            About
          </Link>
          <Link href="/#contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
