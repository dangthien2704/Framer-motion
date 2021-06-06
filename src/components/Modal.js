import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: -1000 },
  visible: { y: 200 },
};

export default function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="modal"
          >
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
