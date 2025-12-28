"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { Menu, X } from "lucide-react";

export default function HeroVideo() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "History", href: "#history" },
    { label: "Specs", href: "#specs" },
    { label: "Gallery", href: "#gallery" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/airbusVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="relative z-10 flex h-full items-center justify-center text-center text-white"
          id="/"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              ref={titleRef}
              className="text-7xl font-bold tracking-wide text-left"
            >
              The A220
            </h1>

            <p className="mt-4 text-xl opacity-90 text-left">
              The future of short to medium-haul flight
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
