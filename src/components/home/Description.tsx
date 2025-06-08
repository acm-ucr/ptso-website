"use client";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, y: 20, x: 0 }}
      whileInView={{ scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-ptso-purple-accent font-quicksand mx-auto h-auto w-5/6 text-center text-base sm:text-xl md:text-2xl"
    >
      We are committed to fostering a supportive community at UCR for
      individuals interested in pursuing careers in therapy. Whether members
      aspire to work in physical therapy, occupational therapy, counseling, or
      even radiation therapy, our mission is to provide resources that support
      academic and professional growth while helping members gain clarity on
      their career goals. Driven by a passion to advocate for the overall
      well-being of others, we strive to create a space where future therapists
      across different fields can access valuable resources and contribute to a
      collaborative, supportive environment.
    </motion.div>
  );
};

export default Description;
