import React, { useState, useRef } from "react";
import CustomButton from "../CustomButton";

const ArticleForm = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxfkDwdJRUl4Y2tGlQ0UaW_ALYzMntYBD2K7P-V2WiAHrHIN2njVmOyVB9anVs7Mz_L/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    const formData = new FormData(formRef.current);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      alert("Form submitted successfully!");
      formRef.current.reset();
      setEmail("");
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      name="google-sheet"
      className=""
    >
      <div className="flex flex-col gap-8">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex-1">
            <label className="block font-medium text-gray-800">Name</label>
            <input
              name="Name"
              type="text"
              placeholder="Enter full name"
              className="w-full mt-1 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-gray-800">Email ID</label>
            <input
              name="Email"
              type="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">Enter valid email id</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-800">
            Suggested Keywords
          </label>
          <input
            name="Suggested Keywords"
            type="text"
            placeholder="Enter Keywords"
            className="w-full mt-1 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-800">Authors Bio</label>
          <input
            name="Authoe bio"
            type="text"
            placeholder="Enter Authors Bio"
            className="w-full mt-1 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
          />
          <p className="text-sm italic text-gray-500">Max 100 words</p>
        </div>

        <div>
          <label className="block font-medium text-gray-800">
            Short Summary
          </label>
          <input
            name="Short Summary"
            type="text"
            placeholder="Enter Short Summary"
            className="w-full mt-1 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
          />
          <p className="text-sm italic text-gray-500">Max 100 words</p>
        </div>

        <div>
          <label className="block font-medium text-gray-800">Upload</label>
          <input
            name="FileUpload"
            type="file"
            className="mt-1 w-full p-3 bg-gray-100 rounded border border-gray-300"
          />
          <p className="text-sm italic text-gray-500">
            Zip folder, PDF's, Word doc (size not more than 5mb)
          </p>
        </div>
      </div>
      <div className="flex gap-4 pt-8">
        <CustomButton
          name="CANCEL"
          variant="outlined"
          onClick={() => {
            formRef.current.reset();
            setEmail("");
            setEmailError(false);
          }}
        />
        <CustomButton name="SUBMIT ARTICLE" type="submit" />
      </div>
    </form>
  );
};

export default ArticleForm;
