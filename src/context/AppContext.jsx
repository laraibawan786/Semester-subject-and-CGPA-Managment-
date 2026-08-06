import React, { createContext, useState, useEffect } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [semesters, setSemesters] = useState(() => {
    const savedData = localStorage.getItem("semesters");
    return savedData
      ? JSON.parse(savedData)
      : [{ id: 1, name: "Semester 1", subjects: [] }];
  });


  useEffect(() => {
    localStorage.setItem("semesters", JSON.stringify(semesters));
  }, [semesters]);

  const addSubject = (semesterId, subject) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? {
              ...sem,
              subjects: [...sem.subjects, { id: Date.now(), ...subject }],
            }
          : sem
      )
    );
  };

  const deleteSubject = (semesterId, subjectId) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? {
              ...sem,
              subjects: sem.subjects.filter((sub) => sub.id !== subjectId),
            }
          : sem
      )
    );
  };

  const editSubject = (semesterId, subjectId, updatedSubject) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? {
              ...sem,
              subjects: sem.subjects.map((sub) =>
                sub.id === subjectId ? { ...sub, ...updatedSubject } : sub
              ),
            }
          : sem
      )
    );
  };

  const addSemester = () => {
    setSemesters((prev) => [
      ...prev,
      { id: Date.now(), name: `Semester ${prev.length + 1}`, subjects: [] },
    ]);
  };
  const calculateSGPA = (semester) => {
    const gradeScale = { A: 4.0, "B+": 3.5, B: 3.0, C: 2.5, D: 2.0, F: 0.0 };

    let totalPoints = 0;
    let totalCredits = 0;

    semester.subjects.forEach((sub) => {
      totalPoints += gradeScale[sub.grade] * parseFloat(sub.creditHours);
      totalCredits += parseFloat(sub.creditHours);
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };
const resetAllData = () => {
  setSemesters([
    {
      id: 1,
      name: "Semester 1",
      subjects: []
    }
  ]);
};

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    semesters.forEach((sem) => {
      const sgpa = parseFloat(calculateSGPA(sem));
      const semCredits = sem.subjects.reduce(
        (sum, sub) => sum + parseFloat(sub.creditHours),
        0
      );

      totalPoints += sgpa * semCredits;
      totalCredits += semCredits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <AppContext.Provider
      value={{
        semesters,
        addSubject,
        deleteSubject,
        editSubject,
        addSemester,
        calculateCGPA,
        calculateSGPA,
       resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;
