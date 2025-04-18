import React, { useRef, useState } from "react";
import CustomButton from "../CustomButton";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // const formRef = useRef(null);
  const formRef = document.forms["google-sheet"];

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxxpcB06b0mjsOAiFWbMqmwI1WWRT6EUX46aVIyT7MJkapiCgP6pNEVVXtqBOYsD-6k/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    fetch(scriptURL, { method: "POST", body: new FormData(formRef) })
      .then((response) => {
        setShowToast(true);
        setEmail("");
        // alert("Thanks for Contacting us..! We Will Contact You Soon...");
        formRef.reset();
        setTimeout(() => setShowToast(false), 2000);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="bg-(--AthensGray)">
      <div>
        <img src="/images/contact-line-up.svg" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-40 flex md:flex-row flex-col md:items-start justify-start gap-16 md:gap-35">
        <div className="flex flex-col gap-6">
          <h2 className="text-(--black) font-semibold text-4xl tracking-widest">
            Get in Touch
          </h2>
          <p className="md:text-lg text-base">
            We’re here to help! Reach out for any inquiries or support
            <br /> you need.
          </p>
          <p>
            Email:{" "}
            <span className="underline underline-offset-2">
              reach@apu.edu.in
            </span>
          </p>
          <div className="flex flex-col gap-1">
            <h6 className="font-bold text-lg tracking-widest">Address</h6>
            <p className="text-base">
              Burugunte Village, Survey No 66, <br /> Bikkanahalli Main Rd,
              Sarjapura, Bengaluru, <br /> Karnataka 562125
            </p>
          </div>
        </div>

        <div className="">
          <form
          ref={formRef}
            className="md:mt-14"
            method="post"
            onSubmit={handleSubmit}
            name="google-sheet"
          >
            <div className="flex md:flex-row flex-col gap-8">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Placeholder"
                  className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Placeholder"
                  className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">
                    Enter valid email id
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-gray-700">Description</label>
              <input
                placeholder="Placeholder"
                type="text"
                id="description"
                name="Description"
                className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></input>
            </div>

            <div className="my-6 bg-gray-800 hover:bg-gray-600 text-sm font-medium text-(--primary-color) px-6 py-3 rounded  transition tracking-[1px] h-12 w-33 cursor-pointer">
              <button type="submit" className="flex gap-3 items-center ">
                SUBMIT{" "}
                <span className="text-xl font-normal">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>

            {showToast && (
              <div className="px-4 py-3 text-sm text-gray-700 submit-btn">
                Thanks for contacting us! We’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
