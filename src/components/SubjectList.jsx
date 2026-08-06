import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function SubjectList({ subjects, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editSubject, setEditSubject] = useState({});

  const handleEditClick = (subject) => {
    setEditId(subject.id);
    setEditSubject(subject);
  };

  const handleChange = (e) => {
    setEditSubject({ ...editSubject, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(editId, editSubject);
    setEditId(null);
    setEditSubject({});
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6 mt-6 rounded-3xl shadow-lg border border-purple-200"
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        📚 Subject List
      </h2>

      {subjects.length === 0 ? (
        <p className="text-purple-600 italic">No subjects added yet.</p>
      ) : (
        <table className="table align-middle">
          {/* 🔵 HEADER – Pastel Purple */}
          <thead className="bg-purple-300/70 text-purple-900">
            <tr>
              <th className="py-3">Subject Name</th>
              <th>Code</th>
              <th>Credit Hours</th>
              <th>Instructor</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <AnimatePresence>
              {subjects.map((subject) => (
                <motion.tr
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-purple-100 transition duration-200"
                >
                  {/* ✏️ EDIT MODE */}
                  {editId === subject.id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={editSubject.name}
                          onChange={handleChange}
                          className="form-control border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="code"
                          value={editSubject.code}
                          onChange={handleChange}
                          className="form-control border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="creditHours"
                          value={editSubject.creditHours}
                          onChange={handleChange}
                          className="form-control border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="instructor"
                          value={editSubject.instructor}
                          onChange={handleChange}
                          className="form-control border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
                        />
                      </td>
                      <td>
                        <select
                          name="grade"
                          value={editSubject.grade}
                          onChange={handleChange}
                          className="form-control border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
                        >
                          <option value="A">A</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="F">F</option>
                        </select>
                      </td>
                      <td className="flex flex-wrap gap-2">
                        <button
                          onClick={handleSave}
                          className="px-3 py-1 rounded-md bg-green-400 text-white font-semibold shadow-md hover:bg-green-500 transition"
                        >
                          ✅ Save
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="px-3 py-1 rounded-md bg-gray-400 text-white font-semibold shadow-md hover:bg-gray-500 transition"
                        >
                          ❌ Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      {/* 📋 VIEW MODE */}
                      <td className="text-purple-900 font-medium">{subject.name}</td>
                      <td className="text-purple-800">{subject.code}</td>
                      <td className="text-purple-800">{subject.creditHours}</td>
                      <td className="text-purple-800">{subject.instructor}</td>
                      <td className="text-purple-900 font-semibold">{subject.grade}</td>
                      <td className="flex flex-wrap gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEditClick(subject)}
                          className="px-3 py-1 rounded-md bg-yellow-300 text-purple-900 font-semibold shadow-md hover:bg-yellow-400 transition"
                        >
                          ✏️ Edit
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onDelete(subject.id)}
                          className="px-3 py-1 rounded-md bg-red-400 text-white font-semibold shadow-md hover:bg-red-500 transition"
                        >
                          🗑 Delete
                        </motion.button>
                      </td>
                    </>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      )}
    </motion.div>
  );
}

export default SubjectList;
