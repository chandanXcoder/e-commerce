import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; // 🖼️ अपनी image यहाँ रखो (e.g. hero.png)

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
      {/* ---------- Left Side Text ---------- */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Discover the Best <span className="text-blue-600">Deals</span> <br />
          on Top Products
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Shop the latest gadgets, fashion, and accessories — all in one place.
          Great discounts, fast delivery, and secure checkout.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-medium"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* ---------- Right Side Image ---------- */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={heroImg}
          alt="Shopping"
          className="w-[90%] md:w-[80%] drop-shadow-2xl rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
