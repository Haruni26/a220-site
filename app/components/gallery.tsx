"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PlaneGallery() {
  const images = [
    "/images/gallery/a220Ground.jpg",
    "/images/gallery/a220-engine.jpg",
    "/images/gallery/a220Bulgaria.jpg",
    "/images/gallery/a220Swiss.jpg",
    "/images/gallery/a220DeltaSide.jpg",
    "/images/gallery/a220Front.jpg",
  ];

  return (
    <section id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Centered container */}
        <section className="mt-20 max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-8">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Airbus A220"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
