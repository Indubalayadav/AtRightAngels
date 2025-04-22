import React, { useState, useRef } from "react";
import CustomButton from "../CustomButton";

const ArticleForm = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      formRef.current.reset();
      setEmail("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
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
            <label className="block font-medium text-(--MineShaft)">Name</label>
            <input
              name="Name"
              type="text"
              placeholder="Enter full name"
              className="w-full mt-1 p-3 bg-(--Nevada) rounded border border-(--Nevada) focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-(--MineShaft)">
              Email ID
            </label>
            <input
              name="Email"
              type="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 bg-(--Nevada) rounded border border-(--Nevada) focus:outline-none"
            />
            {emailError && (
              <p className="text-sm text-(--red) mt-1">Enter valid email id</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-medium text-(--MineShaft)">
            Suggested Keywords
          </label>
          <input
            name="Suggested Keywords"
            type="text"
            placeholder="Enter Keywords"
            className="w-full mt-1 p-3 bg-(--Nevada) rounded border border-(--Nevada) focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-medium text-(--MineShaft)">
            Authors Bio
          </label>
          <input
            name="Authoe bio"
            type="text"
            placeholder="Enter Authors Bio"
            className="w-full mt-1 p-3 bg-(--Nevada) rounded border border-(--Nevada) focus:outline-none"
          />
          <p className="text-sm italic text-(--Emperor)">Max 100 words</p>
        </div>

        <div>
          <label className="block font-medium text-(--MineShaft)">
            Short Summary
          </label>
          <input
            name="Short Summary"
            type="text"
            placeholder="Enter Short Summary"
            className="w-full mt-1 p-3 bg-(--Nevada) rounded border border-(--Nevada) focus:outline-none"
          />
          <p className="text-sm italic text-(--Emperor)">Max 100 words</p>
        </div>

        <div>
          <label className="block font-medium text-(--MineShaft)">Upload</label>
          <input
            name="FileUpload"
            type="file"
            className="mt-1 w-full p-3 bg-(--Nevada) rounded border border-(--Nevada)"
          />
          <p className="text-sm italic text-(--Emperor)">
            Zip folder, PDF's, Word doc (size not more than 5mb)
          </p>
        </div>
      </div>
      <div className="flex gap-4 pt-8">
      <CustomButton
          variant="outline"
          type="button"
          onClick={() => {
            formRef.current.reset();
            setEmail("");
            setEmailError(false);
          }}
        className="cursor-pointer">
          CANCEL
        </CustomButton>

        <CustomButton type="submit" disabled={isSubmitting} className="cursor-pointer">
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-t-transparent border-(--primary-color) rounded-full animate-spin"></div>
          ) : (
            <>
              SUBMIT ARTICLE <i className="fas fa-arrow-right ml-2"></i>
            </>
          )}
        </CustomButton>
      </div>

      {showToast && (
        <div className="px-4 py-3 text-sm text-(--MineShaft) submit-btn">
          🎉 Your article has been submitted successfully!
        </div>
      )}
    </form>
  );
};

export default ArticleForm;
