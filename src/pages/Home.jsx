import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import SemesterCard from "../components/SemesterCard";
import CGPACircle from "../components/CGPACircle";
import SubjectForm from "../components/SubjectForm";
import SubjectList from "../components/SubjectList";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const { semesters, addSemester, addSubject, deleteSubject, editSubject } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">

      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white py-16 shadow-xl rounded-b-3xl"
      >
        <div className="container text-center">

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-wide drop-shadow-lg"
          >
            🎓 Welcome to <span className="text-pink-100">CGPA Tracker</span>
          </motion.h1>

          <p className="mt-3 text-white/90 text-lg max-w-xl mx-auto">
            Manage your <span className="font-bold">Subjects</span>, calculate your <span className="font-bold">CGPA</span> & stay on top of your academic goals – all in one app.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={addSemester}
            className="mt-6 px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
          >
            ➕ Add Semester
          </motion.button>
        </div>
      </motion.section>


      <div className="container mx-auto p-6">
        
        <div className="flex justify-center my-6">
          <CGPACircle semesters={semesters} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {semesters.map((semester) => (
            <div key={semester.id} className="space-y-4">
              
              <SemesterCard semester={semester} />


              <SubjectForm onAddSubject={(subject) => addSubject(semester.id, subject)} />

              <SubjectList
                subjects={semester.subjects}
                onDelete={(subjectId) => deleteSubject(semester.id, subjectId)}
                onEdit={(subjectId, updatedSubject) => editSubject(semester.id, subjectId, updatedSubject)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

