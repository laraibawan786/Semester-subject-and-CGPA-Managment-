import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200
                 text-purple-800 py-5 mt-12 shadow-inner border-t border-purple-200"
    >
      <div className="container text-center">
        <motion.p
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 10px rgba(180,150,255,0.6)",
          }}
          transition={{ duration: 0.3 }}
          className="text-sm tracking-wide font-medium"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-purple-600">CGPA Tracker</span> | Built up by{" "}
          <span className="font-bold text-pink-600 hover:text-purple-800 transition duration-300">
            Laraib Batool @Udevs
          </span>
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-3 mx-auto h-0.5 w-24 bg-pink-300 rounded-full"
        ></motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

