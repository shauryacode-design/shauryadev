"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const pendingElements: HTMLElement[] = [];

    elements.forEach((element) => {
      // Keep visible content untouched on load, including hash-linked sections.
      if (element.getBoundingClientRect().top < window.innerHeight) {
        return;
      }

      // Reveal classes are client-only; tagged JSX elements suppress this intentional hydration difference.
      element.classList.add("reveal-pending");

      const delay = element.dataset.revealDelay;
      if (delay !== undefined) {
        element.style.setProperty("--reveal-delay", `${delay}ms`);
      }

      pendingElements.push(element);
    });

    if (!("IntersectionObserver" in window)) {
      pendingElements.forEach((element) => {
        element.classList.remove("reveal-pending");
      });
      return;
    }

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const observerBottom = window.innerHeight - document.documentElement.clientWidth * 0.08;
    const edgeElements = pendingElements.filter((element) => {
      const rect = element.getBoundingClientRect();
      const topAtPageEnd = rect.top + window.scrollY - maxScroll;
      const bottomAtPageEnd = topAtPageEnd + rect.height;
      const visibleHeight = Math.max(
        0,
        Math.min(bottomAtPageEnd, observerBottom) - Math.max(topAtPageEnd, 0),
      );
      const visibleRatio = rect.height === 0 ? 0 : visibleHeight / rect.height;

      // A second viewport observer reveals content the reduced root cannot reach at page end.
      return topAtPageEnd < window.innerHeight && bottomAtPageEnd > 0 && visibleRatio < 0.15;
    });

    const observers: IntersectionObserver[] = [];
    const revealIntersecting = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target.classList.contains("reveal-pending")) {
          return;
        }

        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("reveal-visible");
        observers.forEach((observer) => observer.unobserve(entry.target));
      });
    };

    const observer = new IntersectionObserver(revealIntersecting, {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    });
    observers.push(observer);

    const edgeObserver = edgeElements.length > 0
      ? new IntersectionObserver(revealIntersecting, {
        threshold: 0.15,
      })
      : undefined;
    if (edgeObserver) observers.push(edgeObserver);

    pendingElements.forEach((element) => observer.observe(element));
    edgeElements.forEach((element) => edgeObserver?.observe(element));

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return null;
}
