import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext"; // ✅ SGPA ke liye context import
import 'bootstrap/dist/css/bootstrap.min.css';

function SemesterCard({ semester }) {
  const { calculateSGPA } = useContext(AppContext); // ✅ function le liya context se

  const sgpa = calculateSGPA(semester); // ✅ is semester ka SGPA calculate

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(180, 150, 255, 0.3)" }}
      whileTap={{ scale: 0.97 }}
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 
                 p-5 rounded-3xl shadow-md transition-all duration-300 border border-purple-200"
    >
      {/* 📌 Semester Title */}
      <h2 className="text-xl font-bold text-purple-900 mb-2">
        {semester.name}
      </h2>

      {/* ✅ SGPA Display */}
      <p className="text-lg font-semibold text-purple-700 mb-3">
        📊 SGPA: <span className="text-purple-900">{sgpa}</span>
      </p>

      {/* 📄 Subtitle */}
      <p className="text-purple-700 text-sm italic">
        Subjects will appear here
      </p>

      {/* ➕ Add Subject Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-5 py-2 rounded-xl 
                   bg-purple-300 text-purple-900 font-semibold
                   hover:bg-purple-400 hover:text-white 
                   transition duration-300 shadow-md"
      >
        ➕ Add Subject
      </motion.button>
    </motion.div>
  );
}

export default SemesterCard;
