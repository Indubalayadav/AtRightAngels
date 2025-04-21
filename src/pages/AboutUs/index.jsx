import React from "react";
import Informed from "../../components/Informed";

const AboutUs = () => {
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
          <h2 className="md:text-5xl text-3xl font-bold mb-4">About Us</h2>
          <p className="md:text-3xl text-base leading-[1.75]">
            The Azim Premji Foundation was set up in 2001 with a vision to
            contribute towards a more just, equitable, humane and sustainable
            society. A core area of our work is to improve the public school
            education system in India, with a focus on the more disadvantaged
            areas of the country.
          </p>
        </div>
        <img src="/images/callforarcticle-img.png" alt="" />
        <div className="lg:w-1xl m-auto md:py-10 py-8 md:px-20 flex flex-col gap-8">
            <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="md:text-2xl text-base leading-[1.75]">
              The Azim Premji University which is a unit of the Foundation, was
              set up in 2010. ‘Azim Premji University Publications’ include
              magazines that support primary and upper primary school education,
              in Mathematics, Science, and teaching-learning practices in
              general. These magazines are intended to support practising school
              teachers, teacher educators and educational functionaries.
            </p>
            <p className="md:text-2xl text-base leading-[1.75]">
              At Right Angles is a magazine that provides quality mathematics
              learning resources for school teachers. It intends to facilitate
              more experiential and meaningful teaching-learning processes, not
              just inside the classrooms but also in the broader context of
              school processes. To celebrate purposeful and passionate teaching,
              At Right Angles showcases practical insights grounded in the
              realities of India and its diverse communities.
            </p>
            <p className="md:text-2xl text-base leading-[1.75]">
              To help teachers teach better so that students can learn better,
              we have taken our cues from the Mathematics section in the
              National Curriculum Framework (NCF-SE) 2023. We address the
              challenges teachers face in pedagogy and classroom processes,
              considering both the local context of the teacher and the school
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-18 gap-6">
            <div className="space-y-10">
              <div>
                <h3 className="font-bold uppercase text-xl pb-2">
                  Chief Editor
                </h3>
                <p className="text-xl">Sneha Titus</p>
                <p>
                  <a
                    href="mailto:sneha.titus@apu.edu.in"
                    className="underline underline-offset-2"
                  >
                    sneha.titus@apu.edu.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase text-xl pb-2">Web Editor</h3>
                <p className="text-xl">Swati Sircar</p>
                <p>
                  <a
                    href="mailto:swati.sircar@apu.edu.in"
                    className="underline underline-offset-2"
                  >
                    swati.sircar@apu.edu.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase text-xl py-10">
                  Editorial Team
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-xl pb-2">Ajaykumar K</p>
                    <a
                      href="mailto:ajaykumar.k@apu.edu.in"
                      className="underline underline-offset-2"
                    >
                      ajaykumar.k@apu.edu.in
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Rudresh S</p>
                    <a
                      href="mailto:rudresh@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      rudresh@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Mohammed Umar</p>
                    <a
                      href="mailto:mohammed.umar@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      mohammed.umar@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Ashok Prasad</p>
                    <a
                      href="mailto:ashok.prasad@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      ashok.prasad@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">
                      Sudheesh Venkatesh (Advisor)
                    </p>
                    <p className="text-sm">
                      Chief Communications Officer & Managing Editor,
                    </p>
                    <a
                      href="mailto:sudheesh.venkatesh@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      sudheesh.venkatesh@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Publications Team</p>
                    <p className="text-sm">
                      Meera Prabhu, Shahanaz Begum, Lokram V G, and Sambit
                      Mahapatra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="font-bold uppercase text-xl pb-2">
                  Associate Editor
                </h3>
                <p className="text-xl">Mohan R</p>
                <p>
                  <a
                    href="mailto:mohan.r@apu.edu.in"
                    className="underline underline-offset-2"
                  >
                    mohan.r@apu.edu.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase text-xl pb-2">
                  Editorial Office
                </h3>
                <p className="text-xl">Publications, Azim Premji University</p>
                <p>
                  <a
                    href="mailto:publications@apu.edu.in"
                    className="underline underline-offset-2"
                  >
                    publications@apu.edu.in
                  </a>
                  <br />
                  <a
                    href="https://www.azimpremjiuniversity.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    www.azimpremjiuniversity.edu.in
                  </a>
                </p>
              </div>

              <div>
                <div className="space-y-6 md:pt-18 ">
                  <div>
                    <p className="font-semibold text-xl pb-2">Kshama Chakravarthy</p>
                    <a
                      href="mailto:kshama.chakravarthy@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      kshama.chakravarthy@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Arddhendu Shekhar Dash</p>
                    <a
                      href="mailto:arddhendu@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      arddhendu@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Sandeep Diwakar</p>
                    <a
                      href="mailto:sandeep.diwakar@azimpremjifoundation.org"
                      className="underline underline-offset-2"
                    >
                      sandeep.diwakar@azimpremjifoundation.org
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Padmapriya Shirali</p>
                    <a
                      href="mailto:padmapriya.shirali@gmail.com"
                      className="underline underline-offset-2"
                    >
                      padmapriya.shirali@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-xl pb-2">Translations Editors</p>
                    <p className="text-sm">
                      Madhukar S Putty (Kannada)
                      <br />
                      Rajesh Utsahi (Hindi)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
        <Informed />
      </div>
    </div>
  );
};

export default AboutUs;
