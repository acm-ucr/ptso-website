"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}
import { useState } from "react";
import Image from "next/image";
import vector6 from "@/public/assets/home/background/vector6.svg";
import contactUs from "@/public/assets/home/contactUs.webp";
import ptsoLogoLarge from "@/public/ptsoLogoLarge.webp";
import Title from "@/components/Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>

      <div className="block md:hidden">
        <Title text="Contact Us" />
      </div>

      <div className="relative mb-5 flex flex-col md:flex-row">
        <div className="flex items-center justify-center md:w-1/2">
          <div className="flex md:flex-col md:gap-6">
            <div className="relative bottom-10 hidden md:block">
              <Title text="Contact Us" />
              <Image
                src={contactUs}
                alt="Contact Us Hand"
                className="hidden w-5/6 md:block"
              />
            </div>
          </div>
        </div>

        <div className="relative m-10 flex justify-center">
          <Image
            src={vector6}
            alt="Contact Us Blob"
            className="relative right-5 bottom-13 hidden md:block"
          />

          <div className="bg-ptso-blue-light border-ptso-blue-accent w-full rounded-4xl border-3 p-8 md:absolute md:w-5/6">
            {isSubmitted ? (
              <div className="font-average flex flex-col items-center text-4xl">
                <Image src={ptsoLogoLarge} alt="Logo" className="m-19 w-1/3" />
                Form Submitted!
              </div>
            ) : (
              <form
                action="https://docs.google.com/forms/d/1jzI8siyhb0IFkiiah1I0O2L9M0O3iZdmZnHPkXKUwGA/formResponse"
                onSubmit={() => (window.submitted = true)}
                target="hidden_iframe"
              >
                <div className="font-quicksand block text-3xl font-bold md:text-2xl">
                  Name
                </div>
                <input
                  name="entry.1922039377"
                  type="text"
                  placeholder="Name"
                  className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-3"
                  required
                />

                <div className="font-quicksand mt-4 block text-3xl font-bold md:text-2xl">
                  Email
                </div>
                <input
                  name="entry.190572232"
                  type="text"
                  placeholder="Email"
                  className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-3"
                  required
                />

                <div className="font-quicksand mt-4 block text-3xl font-bold md:text-2xl">
                  Message
                </div>
                <textarea
                  name="entry.1180546097"
                  className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-6"
                  required
                ></textarea>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="flex justify-center p-3">
                    <button className="bg-ptso-blue-dark w-1/3 cursor-pointer rounded-2xl p-3 text-white">
                      Submit
                    </button>
                  </div>
                </motion.div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
