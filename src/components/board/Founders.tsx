"use client";
import Image from "next/image";
import { founders } from "@/data/Founders";
import Title from "@/components/Title";
import { motion } from "motion/react";

const Founders = () => {
  return (
    <div className="bg-ptso-pink-light flex-col justify-items-center pb-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Title text="Our Founders" />
      </motion.div>
      <div className="w-2/3 justify-between sm:flex">
        {founders.map(({ image, name, alt }, index) => (
          <motion.div
            className="m-6 flex-col text-center md:text-2xl"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={image}
              alt={alt}
              width={300}
              height={300}
              className="mb-2 w-full px-8"
            />
            {name}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="font-quicksand w-4/5 text-center text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        When we founded the Pre-Therapy Student Organization (PTSO), we wanted
        to create something more than just a club—we wanted a community. As
        students navigating the complex journey toward careers in therapy, we
        knew how overwhelming it could be to find the right resources, gain
        hands-on experience, and connect with professionals in the field. We
        built PTSO to bridge that gap at UC Riverside. Our goal was to support
        each other, learn together, and create opportunities that would help us
        grow both personally and professionally. Through workshops, guest
        speakers, and volunteer experiences, we have worked to make PTSO a place
        where aspiring therapists can find guidance, encouragement, and a sense
        of belonging.
      </motion.div>
    </div>
  );
};
export default Founders;
