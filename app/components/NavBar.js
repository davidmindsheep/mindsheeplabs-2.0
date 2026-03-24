import Image from "next/image";
import Link from "next/link";

export default function NavBar({ activePage }) {
  return (
    <nav className="glass-nav subpage-nav">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" style={{ display: "flex", alignItems: "center", height: "60px" }}>
          <Image
            src="/MINDSHEEP LOGO.svg"
            alt="Mindsheep Labs Logo"
            width={180}
            height={50}
            className="object-contain"
            priority
          />
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
