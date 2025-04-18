import React from "react";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/UI/Input";
import Informed from "../../components/Informed";
import ArticleForm from "../../components/ArticleForm";

const index = () => {
  return (
    <>
      <div className="relative h-full">
        <div className="bg-(--Blumine) h-78">
          <img
            src="/images/allarticleimg.svg"
            alt=""
            className="absolute top-14"
          />
        </div>

        <div className="relative -top-70 m-auto lg:w-5xl bg-(--primary-color)  p-6 rounded-md">
          <div className="flex flex-col justify-between md:py-20 py-8 gap-8 md:px-20">
            <div>
              <img src="/images/magazine-img.svg" alt="" />
            </div>
            <h2 className="md:text-5xl text-3xl font-bold mb-4">
              Call For Articles
            </h2>
            <p className="md:text-3xl text-base leading-[1.6]">
              At Right Angles is a quality resource dedicated to mathematics
              education in India's public education system. It is specifically
              designed for teachers and teacher educators at the foundational,
              preparatory, and middle school levels.
            </p>
            <p className="md:text-2xl text-base leading-[1.75]">
              We invite articles from mathematics teachers, educators,
              practitioners, parents, and students. If you are looking for a
              platform to contribute articles that support and enhance the
              learning experience of mathematics particularly for students
              approximately in the age group 6-14 years , we welcome your
              submissions.
            </p>
            <div>
              <CustomButton
                name="Read Magazine Guidelines"
                variant="outlined"
              />
            </div>
          </div>
          <img src="/images/callforarcticle-img.png" alt="" />
          <div className="lg:w-1xl m-auto md:py-20 py-8 md:px-20 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <div>
                <img src="/images/magazine-img.svg" alt="" />
              </div>
              <h3 className="md:text-5xl text-3xl font-bold">Submit Article</h3>
              <p className="md:text-2xl text-base">
                Articles may also be sent to{" "}
                <span className="text-(--Blumine) underline underline-offset-2 decoration-(--black) ">
                  atrightangles.editor@apu.edu.in
                </span>
              </p>
            </div>
            <ArticleForm />
          </div>
        </div>
        <div className="relative -top-70">
          <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
          <Informed />
        </div>
      </div>
    </>
  );
};

export default index;
