import React, { useRef, useState }  from "react";
import Informed from "../../components/Informed";

const ContactUs = () => {
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
    <div className="relative h-full">
      <div className="bg-(--Blumine) h-78">
        <img
          src="/images/allarticleimg.svg"
          alt=""
          className="absolute top-14"
        />
      </div>

      <div className="relative -top-60 m-auto lg:w-5xl bg-(--primary-color)  p-6 rounded-md">
        <div className="flex flex-col justify-between md:py-10 py-8 gap-8 md:px-20">
          <div>
            <img src="/images/magazine-img.svg" alt="" />
          </div>
          <h2 className="md:text-5xl text-3xl font-bold mb-4">Contact Us</h2>
          <p className="md:text-3xl text-base leading-[1.75]">
            The Azim Premji Foundation was set up in 2001 with a vision to
            contribute towards a more just, equitable, humane and sustainable
            society.
          </p>
        </div>
        <img src="/images/callforarcticle-img.png" alt="" />
        <div className="lg:w-1xl m-auto md:py-10 py-8 md:px-20 flex flex-col gap-8">
          <p className="md:text-3xl text-base leading-[1.75]">
            These magazines are intended to support practising school teachers,
            teacher educators and educational functionaries.
          </p>
          <div className="">
          <form
          ref={formRef}
            className="md:mt-14"
            method="post"
            onSubmit={handleSubmit}
            name="google-sheet"
          >
            <div className="flex md:flex-row flex-col gap-8 w-full">
              <div className="md:w-1/2 w-full">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Placeholder"
                  className="w-full h-12 mt-1 p-3 bg-(--contact-input) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <label className="block text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Placeholder"
                  className="w-full h-12 mt-1 p-3 bg-(--contact-input) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                className="w-full h-12 mt-1 p-3 bg-(--contact-input) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
        <div className="flex flex-col gap-8 pt-16">
            <h6 className="font-bold text-lg tracking-widest">Address</h6>
            <p className="text-base">
              <span className="font-bold">Azim Premji University,</span> <br />
              Burugunte Village, Survey No 66, Bikkanahalli Main <br /> Rd,
              Sarjapura, Bengaluru, Karnataka 562125
            </p>
            <p>Write to outreach@​apu.​edu.​in</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
        <Informed />
      </div>
    </div>
  );
};

export default ContactUs;
