"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState } from "react";
import Image from "next/image";
import rectangle2 from "@/public/assets/home/background/rectangle2.svg";
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

      <div className="relative w-screen">
        <Image src={rectangle2} alt="Contact Us Wave" className="relative" />

        <div className="absolute top-0 flex w-screen md:flex-row">
          <div className="flex w-1/2 justify-center">
            <div className=" md:translate-x-[-8vh] md:translate-y-[40vh]">
              <Title text="Contact Us" />
              <Image src={contactUs} alt="Contact Us Hand" className="hidden md:block h-2/3" />
            </div>
          </div>

          <div className="relative flex w-1/2 justify-center">
            <Image
              src={vector6}
              alt="Contact Us Blob"
              className="hidden md:block translate-x-[-8vh] translate-y-[26vh]"
            />

            <div className="bg-ptso-blue-light border-ptso-blue-accent absolute flex h-auto w-full max-w-[75vh] md:h-[72vh] md:w-[75vh] translate-x-[-vh] md:translate-x-[-5vh] md:translate-y-[35vh] items-center justify-center rounded-4xl border-3">
              {isSubmitted ? (
                <div className="font-average flex flex-col items-center gap-5 text-4xl">
                  <Image src={ptsoLogoLarge} alt="Logo" className="w-[30%]" />
                  Form Submitted!
                </div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/1jzI8siyhb0IFkiiah1I0O2L9M0O3iZdmZnHPkXKUwGA/formResponse"
                  onSubmit={() => (window.submitted = true)}
                  target="hidden_iframe"
                >
                  <div>
                    <div className="font-quicksand block text-md md:text-3xl font-bold">
                      Name
                    </div>
                    <input
                      name="entry.1922039377"
                      type="text"
                      placeholder="Name"
                      className="border-ptso-gray-primary mt-2 h-[5vh] w-full md:w-[62vh] rounded-2xl border-1 bg-white p-3"
                      required
                    />
                    <div className="font-quicksand mt-4 block text-md md:text-3xl font-bold">
                      Email
                    </div>
                    <input
                      name="entry.190572232"
                      type="text"
                      placeholder="Email"
                      className="border-ptso-gray-primary mt-2 h-[5vh] w-full md:w-[62vh] rounded-2xl border-1 bg-white p-3"
                      required
                    />
                    <div className="font-quicksand mt-4 block text-md md:text-3xl font-bold">
                      Message
                    </div>
                    <textarea
                      name="entry.1180546097"
                      className="border-ptso-gray-primary mt-2 h-[19vh] w-full rounded-2xl border-1 bg-white p-3"
                      required
                    ></textarea>
                    <div className="mt-8 flex justify-center">
                      <button className="bg-ptso-blue-dark h-[5vh] w-[15vh] cursor-pointer rounded-2xl text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
