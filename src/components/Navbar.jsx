import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 
                 shadow-md py-4 border-b border-purple-200"
    >
      <div className="container flex justify-center items-center">
      
        <motion.h1
          whileHover={{ 
            scale: 1.08, 
            textShadow: "0px 0px 12px rgba(150,100,255,0.5)" 
          }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-extrabold tracking-widest text-purple-800 drop-shadow-sm"
        >
          The University Of Lahore CGPA Tracker
        </motion.h1>
      </div>
    </motion.nav>
  );
}

export default Navbar;
