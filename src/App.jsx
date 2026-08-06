import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
