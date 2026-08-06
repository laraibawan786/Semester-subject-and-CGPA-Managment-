import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";  
import 'bootstrap/dist/css/bootstrap.min.css';

function CGPACircle() {
 
  const { calculateCGPA } = useContext(AppContext);
  const cgpa = calculateCGPA();

  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "backOut" }}
      className="relative w-52 h-52 rounded-full 
                 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 
                 shadow-xl flex items-center justify-center"
    >
      <div className="absolute w-48 h-48 rounded-full bg-white shadow-inner border-4 border-purple-100"></div>

      <span className="text-5xl font-extrabold z-10 text-purple-800 drop-shadow-sm">
        {cgpa}
      </span>

    
      <p className="absolute bottom-11 text-base font-semibold text-purple-500 tracking-wide">
        Cumulative CGPA
      </p>

      <div className="absolute inset-0 rounded-full border-4 border-pink-200 animate-pulse opacity-30"></div>
    </motion.div>
  );
}

export default CGPACircle;
