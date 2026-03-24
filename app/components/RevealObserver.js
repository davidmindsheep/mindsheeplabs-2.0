"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) {
        // Already in or near viewport — reveal immediately, no animation needed
        el.classList.add("revealed");
      } else {
        // Below viewport — hide and animate in on scroll
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    });

    // Safety fallback: if observer never fires, reveal everything after 1.5s
    const fallback = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.remove("reveal-pending");
        el.classList.add("revealed");
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return null;
}
