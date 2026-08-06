import React, { useState } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function SubjectForm({ onAddSubject }) {
  const [subject, setSubject] = useState({
    name: "",
    code: "",
    creditHours: "",
    instructor: "",
    grade: "A"
  });

  // 📌 Handle input change
  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.name && subject.code && subject.creditHours && subject.instructor) {
      onAddSubject(subject);
      setSubject({ name: "", code: "", creditHours: "", instructor: "", grade: "A" });
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-lg p-6 mt-6 border border-purple-200"
    >

      <h2 className="text-xl font-bold text-purple-800 mb-4">
        ➕ Add New Subject
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="name"
          placeholder="Subject Name"
          value={subject.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 
                     bg-white focus:ring-2 focus:ring-purple-300 
                     focus:outline-none transition duration-300 shadow-sm"
        />

        <input
          type="text"
          name="code"
          placeholder="Subject Code"
          value={subject.code}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 
                     bg-white focus:ring-2 focus:ring-purple-300 
                     focus:outline-none transition duration-300 shadow-sm"
        />

        <input
          type="number"
          name="creditHours"
          placeholder="Credit Hours"
          value={subject.creditHours}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 
                     bg-white focus:ring-2 focus:ring-purple-300 
                     focus:outline-none transition duration-300 shadow-sm"
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor Name"
          value={subject.instructor}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 
                     bg-white focus:ring-2 focus:ring-purple-300 
                     focus:outline-none transition duration-300 shadow-sm"
        />

        <select
          name="grade"
          value={subject.grade}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 
                     bg-white focus:ring-2 focus:ring-purple-300 
                     focus:outline-none transition duration-300 shadow-sm"
        >
          <option value="A">A (4.0)</option>
          <option value="B+">B+ (3.5)</option>
          <option value="B">B (3.0)</option>
          <option value="C">C (2.5)</option>
          <option value="D">D (2.0)</option>
          <option value="F">F (0.0)</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 rounded-xl bg-purple-400 text-white font-semibold 
                     shadow-md hover:bg-purple-500 hover:shadow-lg transition-all duration-300"
        >
          ➕ Add Subject
        </motion.button>

      </form>
    </motion.div>
  );
}

export default SubjectForm;
