import React from "react";
import Hero from "../component/Hero";

export default function Home() {
  return (
    <div className="mt-20"> {/* Navbar fixed है, इसलिए top space */}
      <Hero />
    </div>
  );
}
