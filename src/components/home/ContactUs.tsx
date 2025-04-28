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
        <Image src={rectangle2} alt="Contact Us Wave" className="" />

        <div className="absolute top-0 flex w-screen flex-row">
          <div className="flex w-1/2 justify-center">
            <div className="flex translate-x-[-8vh] translate-y-[40vh] flex-col items-center">
              <Title text="Contact Us" />
              <Image src={contactUs} alt="Contact Us Hand" className="h-2/3" />
            </div>
          </div>

          <div className="relative flex w-1/2 justify-center">
            <Image
              src={vector6}
              alt="Contact Us Blob"
              className="translate-x-[-8vh] translate-y-[26vh]"
            />

            <div className="bg-ptso-blue-light border-ptso-blue-accent absolute flex h-[72vh] w-[75vh] translate-x-[-5vh] translate-y-[35vh] items-center justify-center rounded-4xl border-3">
              {isSubmitted ? (
                <div className="font-average flex flex-col items-center justify-center gap-5 text-4xl">
                  <Image src={ptsoLogoLarge} alt="Logo" className="w-[30%]" />
                  Form Submitted!
                </div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/1jzI8siyhb0IFkiiah1I0O2L9M0O3iZdmZnHPkXKUwGA/formResponse"
                  method="POST"
                  onSubmit={() => (window.submitted = true)}
                  target="hidden_iframe"
                  className="relative m-12"
                >
                  <div>
                    <div className="font-quicksand text-ptso-gray-primary block text-3xl font-bold">
                      Name
                    </div>
                    <input
                      name="entry.1922039377"
                      type="text"
                      placeholder="Name"
                      className="text-ptso-gray-primary border-ptso-gray-primary mt-2 h-[5vh] w-[62vh] rounded-2xl border-1 bg-white p-3"
                      required
                    />
                    <div className="font-quicksand text-ptso-gray-primary mt-4 block text-3xl font-bold">
                      Email
                    </div>
                    <input
                      name="entry.190572232"
                      type="text"
                      placeholder="Email"
                      className="text-ptso-gray-primary border-ptso-gray-primary mt-2 h-[5vh] w-[62vh] rounded-2xl border-1 bg-white p-3"
                      required
                    />
                    <div className="font-quicksand text-ptso-gray-primary mt-4 block text-3xl font-bold">
                      Message
                    </div>
                    <input
                      name="entry.1180546097"
                      type="text"
                      className="text-ptso-gray-primary border-ptso-gray-primary mt-2 h-[19vh] w-full rounded-2xl border-1 bg-white p-3 pb-[20vh]"
                      required
                    />
                    <div className="mt-8 flex justify-center">
                      <button className="bg-ptso-blue-dark h-[5vh] w-[15vh] rounded-2xl text-white">
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
