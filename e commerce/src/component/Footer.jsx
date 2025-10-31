import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        <p className="text-gray-400 mt-2">
          Built with ❤️ by Chand
        </p>
      </div>
    </footer>
  );
};

export default Footer;

