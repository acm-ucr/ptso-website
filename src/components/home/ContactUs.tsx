"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}
import { useState } from "react";
import Image from "next/image";
import vector6 from "@/public/assets/home/background/vector6.svg";
import contactUsTopWave from "@/public/assets/home/background/contactUsTopWave.svg";
import opportunitiesText from "@/public/assets/home/opportunitiesText.svg";
import contactUs from "@/public/assets/home/contactUs.webp";
import ptsoLogoLarge from "@/public/ptsoLogoLarge.webp";
import Title from "@/components/Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const contactUsTitleAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.3 },
};

const formAnimation = {
  initial: { scale: 0.9, opacity: 0, y: 0, x: 10 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: 0.3 },
};

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
      <Image
        className="mx-auto w-5/6"
        src={opportunitiesText}
        alt="Contact Us Top Wave"
      />
      <Image
        className="w-full"
        src={contactUsTopWave}
        alt="Contact Us Top Wave"
      />
      <div className="bg-ptso-blue-primary -mt-1 py-8">
        <div className="block md:hidden">
          <Title text="Contact Us" />
        </div>

        <div className="relative flex flex-col md:flex-row">
          <div className="flex items-center justify-center md:w-1/2">
            <motion.div
              className="relative bottom-10 hidden md:block"
              initial={contactUsTitleAnimation.initial}
              whileInView={contactUsTitleAnimation.whileInView}
              transition={contactUsTitleAnimation.transition}
            >
              <Title text="Contact Us" />
              <Image
                src={contactUs}
                alt="Contact Us Hand"
                className="hidden w-5/6 md:block"
              />
            </motion.div>
          </div>

          <div className="relative m-10 flex justify-center">
            <Image
              src={vector6}
              alt="Contact Us Blob"
              className="relative right-5 bottom-13 hidden md:block"
            />

            <motion.div
              className="bg-ptso-blue-light border-ptso-blue-accent w-full rounded-4xl border-3 p-8 md:absolute md:w-5/6"
              initial={formAnimation.initial}
              whileInView={formAnimation.whileInView}
              transition={formAnimation.transition}
            >
              {isSubmitted ? (
                <div className="font-average flex flex-col items-center text-center text-xl sm:text-2xl">
                  <Image src={ptsoLogoLarge} alt="Logo" className="m-6 w-1/2" />
                  Form Submitted!
                </div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfEp520S0MsaVBYi7kvwI3MK9AidS6VyGL4aw1YiJ4low1M2A/formResponse"
                  onSubmit={() => (window.submitted = true)}
                  target="hidden_iframe"
                >
                  <div className="font-quicksand block text-2xl font-bold">
                    Name
                  </div>
                  <input
                    name="entry.678487467"
                    type="text"
                    placeholder="Name"
                    className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-3"
                    required
                  />

                  <div className="font-quicksand mt-4 block text-2xl font-bold">
                    Email
                  </div>
                  <input
                    name="entry.2011894593"
                    type="email"
                    placeholder="Email"
                    className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-3"
                    required
                  />

                  <div className="font-quicksand mt-4 block text-2xl font-bold">
                    Message
                  </div>
                  <textarea
                    name="entry.686315706"
                    className="border-ptso-gray-primary mt-2 w-full rounded-3xl border-1 bg-white p-6"
                    required
                  />
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="flex justify-center p-3">
                      <button className="bg-ptso-blue-dark hover:bg-ptso-blue-dark/90 w-1/3 cursor-pointer rounded-2xl p-3 text-white">
                        Submit
                      </button>
                    </div>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
