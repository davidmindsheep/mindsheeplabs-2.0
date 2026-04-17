"use client";
import Image from "next/image";
import Link from "next/link";
import useBrand from "../hooks/useBrand";

export default function Footer() {
  const brand = useBrand();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/MINDSHEEP LOGO.svg"
              alt={brand.nameCaps}
              width={140}
              height={40}
              className="footer-logo"
            />
            <p className="footer-tagline">{brand.tagline}</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h4 className="footer-link-heading">Navigate</h4>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div className="footer-link-group">
              <h4 className="footer-link-heading">Get Started</h4>
              <Link href="/#contact">Book a Strategy Call</Link>
              <Link href="/services">See How It Works</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {brand.legal}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
