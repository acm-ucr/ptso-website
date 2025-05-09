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

      <div className="block md:hidden w-full text-center">
        <Title text="Contact Us" />
      </div>

      <div className="flex md:flex-row flex-col">
        <div className="flex justify-center md:w-1/2 items-center">
          <div className="flex md:flex-col md:items-center md:justify-center md:gap-6">
            <div className="hidden md:block">
              <Title text="Contact Us" />
            </div>
            <Image
              src={contactUs}
              alt="Contact Us Hand"
              className="hidden md:block"
            />
          </div>
        </div>

        <div className="relative m-10 flex justify-center md:justify-center">
          <Image
            src={vector6}
            alt="Contact Us Blob"
            className="relative right-5 hidden md:block"
          />

          <div className="bg-ptso-blue-light border-ptso-blue-accent rounded-4xl mt-10 border-3 p-8 w-full  md:absolute md:h-5/6 md:w-5/6">
            {isSubmitted ? (
              <div className="font-average flex flex-col items-center gap-5 text-4xl">
                <Image src={ptsoLogoLarge} alt="Logo" className="w-[30%]" />
                Form Submitted!
              </div>
            ) : (
              <form
                className="w-full"
                action="https://docs.google.com/forms/d/1jzI8siyhb0IFkiiah1I0O2L9M0O3iZdmZnHPkXKUwGA/formResponse"
                onSubmit={() => (window.submitted = true)}
                target="hidden_iframe"
              >
                <div className="w-full">
                  <div className="font-quicksand text-md block font-bold md:text-3xl">
                    Name
                  </div>
                  <input
                    name="entry.1922039377"
                    type="text"
                    placeholder="Name"
                    className="border-ptso-gray-primary mt-2  w-full rounded-2xl border-1 bg-white p-3"
                    required
                  />

                  <div className="font-quicksand text-md mt-4 block font-bold md:text-3xl">
                    Email
                  </div>
                  <input
                    name="entry.190572232"
                    type="text"
                    placeholder="Email"
                    className="border-ptso-gray-primary mt-2  w-full rounded-2xl border-1 bg-white p-3"
                    required
                  />

                  <div className="font-quicksand text-md mt-4 block font-bold md:text-3xl">
                    Message
                  </div>
                  <textarea
                    name="entry.1180546097"
                    className="border-ptso-gray-primary mt-2 w-full rounded-2xl border-1 bg-white p-5 "
                    required
                  ></textarea>

                  <div className="mt-8 flex justify-center">
                    <button className="bg-ptso-blue-dark h-12 w-1/3 cursor-pointer rounded-2xl text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
