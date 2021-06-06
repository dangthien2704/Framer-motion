import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 0.2,
      mass: 0.5,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: -1000,
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Order = ({ pizza, showModal, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
      exit="exit"
    >
      <motion.h2>Thank you for your order :)</motion.h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
